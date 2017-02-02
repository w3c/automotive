Vehicle Signal Client Specification
===================================

Client Goals
------------

The following documents the specification required for a JavaScript client library designed to interface with a VIS server. This library is responsible for the following:

* Connection lifecycle (open, reconnect, failover, closure)
* Authentication token transmission (not retrieval)
* Request lifecycle
* Subscription lifecycle
* VSS tree discovery and traversal

In general, the cleint clients strives for the following goals:

1. Provide a level abstraction exposing all functionality of the underlying server.
2. Provide an API that would be familiar to JavaScript developers including following best-practices when dealing with asynchronous operations.
3. Exhibit good behavior with regard to socket allocation.
4. Provide clear feedback on errors, especially those related to security credentials.

`VISClient` Object
------------------

### Initializing a Client

The `VISClient` class is provided by the client library and a new client object can be created using the exported constructor:

```javascript
const client = new VISClient({ /* options */ });
```

### Client Options

* Connection Properties - These are set at initialization only and cannot be changed after a client is connected.
  * **`host`** (required) - hostname of the server
  * **`protocol`** (default: 'wss') - protocol for the WebSocket connection.  Options are generally `'ws'` for connections not going through an SSL-connection and `'wss'` for those that do.  It is strongly recommended to always use `wss`.
  * **`port`** (default: 443) - TCP port for the WebSocket connection.
  * **`authenticationTokens`** - an inital set of authentication tokens to pass on connect.  These will be sent and must be validated and accepted by the server before `onConnect` is called.  Any authentication errors will result in an error being passed to the `VISClient#connect` callback function.
* Handler Properties - These define the functions called throughout the lifecycle of the client.  These can be set after initializtion and connection. 
  * **`onConnect`** - function called when the client is connected.  This function will be passed:
    * `client` - a copy of the VISClient object
  * **`onError`** - function called when a connection error occurs.
    * `client` - a copy of the VISClient object
    * `error` - the error that occurred
  * **`onMessage`** - function that is called when any message is received. This provide a low-level access to the underlying data and is most likely not used in most cases.
    * `client` - a copy of the VISClient object
  * **`onDisconnect`** - function called when the client is disconnected.  This function will be passed:
    * `client` - a copy of the VISClient object

### Functions

Once created, a client provides several functions for interacting with the server.

Many of the functions listed below require a `path` string to be passed that identifies the portion of the VSS that is being referenced. See VSS below for how to generate this string based on traversing the VSS tree.

* **`connect(callback)`** - Initializes the connection with the server.
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
    * `client` - a copy of the VISClient object
* **`authenticate(token, callback)`** - Add the provided token to the authorization set for this connection
  * `token` - token provided by authorization authority
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
    * `value` - the value received by the server
* **`getVSS(callback)`** - Requests the VSS from the server and calls the callback function with a VSS object as described below. The client caches this value and only retrieves a new version from the server if the `authenticate()` function has been called since the last cache was set.
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
    * `vss` - A VSS object built from the server response
* **`get(path, callback)`** - Receives a single value from the server.
  * `path` - a String representing a location within the VSS
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
* **`set(path, value, callback)`** - Sends a single value to the server. 
  * `path` - a String representing a location within the VSS
  * `value` - the value to pass to the server.  This must match the type as specified in the VSS.
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
* **`subscribe(path, options, callback)`** - subscribes to the given path with the options provided and returns a Subscription object as defined below.
  * `path` - a String representing a location within the VSS
  * `options` - object containing additional options for this subscription
    * `interval` - If specified, the server will send value updates for the provided path at the given interval, regardless of whether that value has changed since the last value. Server-side implementation may limit this interval and should return an error if the requested interval in not acceptable.  If not specified and the `onChange` parameter is not set, then a default interval as defined by the server will be used.
    * `onChange` - If set to `true`, any change in the value of the signal will result in a message and a call to `onValue`. If not specified, either the `interval` value or a default interval as defined by the server will be used.
    * `filter` - applies a server-side filter to data sent. The structure of this option may be server-specific and [is out of scope of this specification ?].
    * `onValue` - function called each time a value for that subscription is received by the client.  This function will be passed:
      * `value` - the value for the subscribed path
      * `subscription` - a copy of the Subscription object
      * `client` - a copy of the VISClient object
  * `callback` - A function called when the subscription has been created
    * `error` - if an error occurred, it is passed here, otherwise `null`
    * `subscription` - the Subscription object representing the result of the call (see Subscription below)
* **`unsubscribe(subscription, callback)`** - Unsubscribe from the subscription passed.
  * `subscription` - the subscription object originally returned from the `subscribe()` function
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`
* **`disconnect(callback)`** - Closes the connection.  The same client can be used again by calling the `connect()` function, but subscriptions, authorization, and other state will not persist after a disconnection.
  * `callback` - A function called when the operation is completed
    * `error` - if an error occurred, it is passed here, otherwise `null`

#### Example

```javascript
const client = new VISClient({
  host: 'vehicle-server.local',
  protocol: 'ws',
  port: 3241,

  onError: (client, error) => {
    console.err(`Error with client in ${client.state}: ${error}`);
  }
});

client.onConnect = (_client) => {
  console.log(`Connected to ${_client.protocol}://${_client.host}:${_client.port}`);
  _client.authenticate(/* TOKEN */, (err) => {
    if(err) {
      console.err('Could not authenticate with provided token.  Disconnecting...');
      _client.disconnect();
      return;
    }
    /* do other things here */
  })
};

client.connect((err)=> {
  if (err) {
    console.err(`Error while connecting: ${err}`);
    return;
  }
});
```

`Subscription` Object
---------------------

The Subscription object is not created directly, but is returned as part of the `VISClient#subscribe()` function discussed above.  Once created the object can be used to access the original options and to pass to the `VISClient#unsubscribe()` function.  The Subscription object does not expose any functions directly, but contains the following properties:

* `path` - the path String used when creating the Subscription
* `options` - object containing the options passed to the `VISClient#subscribe()` function
  * `interval`
  * `onChange`
  * `filter`
  * `onValue`

Subscriptions are immutable once created.

### Example

```javascript
const client = new VISClient({ host: 'vehicle-server.local' });

client.onConnect = () => {
  const subOptions = {
    onChange: true,
    onValue: (value, sub) => {
      console.log(`Got new value for ${sub.path}: ${value}`);
    },
    onExpire: (sub) => {
      console.log(`Authorization expired for ${sub.path}`);
    }
  };

  client.subscribe('body.mirrors.left', subOptions, (err1, speedSub) => {
    if (err1) {
      console.err(`Error while creating subscription: ${err1}`);
      return
    }

    /* ... after some time or some event, unsubscribe from the subscription: */
    client.unsubscribe(speedSub, (err2) => {
      if (err2) {
        console.err(`Error while unsubscribing: ${err2}`);
      }
    });
  });
};

client.connect();
```

`VSS` Object
------------

The VSS object returned by the `VISClient#getVSS()` function above should provide APIs sufficient to fully traverse the VSS tree and determine what signals are available at the current permission level. Traversing the VSS tree can be accomplished using any of a number of query languages (i.e. CSS path selectors, XPath, etc.); CSS-based querying is shown in the functions below, but additional query languages may be added in the future.

* **`pathsByCSS(cssSelector)`** - Returns array of paths that match the given selector.
* **`pathExistsByCSS(cssSelector)`** - Returns a boolean as to whether or not there exist any path that matches the given selector.
* **`canGet(path)`** - Returns a boolean as to whether or not the current socket (given the tokens provided up to this point) has permission to read the given path.
* **`canSet(path)`** - Returns a boolean as to whether or not the current socket (given the tokens provided up to this point) has permission to set the given path.
* **`at([path])`** - Returns the raw VSS tree object rooted at path (if provided), otherwise returns the entire tree.

### Example

```javascript
const openWindow = (_client) => {
  _client.getVSS((err, vss) => {
    const paths = vss.pathsByCSS('Row1 Left Window > Position');
    if (!paths.length) {
      console.err('Could not find front-left window in VSS');
      return;
    }

    if (vss.canSet(paths[0])) {
      _client.set(paths[0], 0, (err) => {
        if (!err) {
          console.log(`Set window ${paths[0]} to open`);
        }
      });
    } else {
      console.err('No authorized to open front-left window');
    }
  });
}

const client = new VISClient({ 
  host: 'vehicle-server.local',
  authenticationTokens: [/* TOKEN */],
  onConnect: openWindow
});

client.connect();
```
