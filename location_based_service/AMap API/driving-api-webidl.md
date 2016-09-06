# Driving API

Driving API packages a set of function, to provide driving route planning service.

# Interface

## Interface 'Driving'

```webidl
[Constructor(DrivingOptions opts)]
interface Driving {
	Promise<any> setProperty(DOMString propertyName, any newValue);
    Promise<any> getProperty(DOMString propertyName);
	void search(LngLat origin, LngLat destination, optional sequence<LngLat> viaPoints, SearchCallback whenSearched);
	void search(DOMString origin, DOMString destination, optional sequence<DOMString> viaPoints, SearchCallback whenSearched);
	void setAvoidRoad(DOMString road);
	DOMString getAvoidRoad();
	void clearAvoidRoad();
	void clear();
};
callback SearchCallback = void(DOMString status, (DrivingResult or DOMString) result);
```

`Driving` is the main interface to deal with driving route planning. A `Driving` instance can be returned by using the Driving constructor that accepts a `DrivingOptions` as input.
* `setProperty()`: set a new value for a property defined in the Driving options.
* `getProperty()`: get the value of a property defined in the Driving options.
* `search()`: Search the driving planning result according to orgin coordinates or name, destination coordinates or name as well as optional via points coordinates or names. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then driving route result is returned. See DrivingResult Interface for more details about the possible values.
* `setAvoidRoad()`: Set the road which will be avoided during route planning.
* `getAvoidRoad()`: Get the road name which will be avoided during route planning.
* `clearAvoidRoad()`: Clear the road which will be avoided during route planning.
* `clear()`: Clear the route planning result.


## Interface 'DrivingOptions'

```webidl
dictionary DrivingOptions {
	DrivingPolicy policy;
	DOMString extensions;
};
```

A 'DrivingOptions' is a dictionary that is passed as input to the 'Driving' constructor. It may be extended in the future with additional option properties. The current supported option properties are:
* `policy`: Policy of driving route planning. See DrivingPolicy Interface for more details about the possible values.
* `extensions`: Choose either 'base' or 'all'. ‘base’: default, return basic driving planning info; ‘all’: return basic and optional detailed driving planning info.


## Interface 'DrivingPolicy'

```webidl
enum DrivingPolicy {
	"LEAST_TIME",
	"LEAST_FEE",
	"LEAST_DISTANCE",
	"REAL_TRAFFIC"
};
```

The `DrivingPolicy` is a enumaration about possible values for the `Driving.policy` attribute. The four values are currently supported:

* `LEAST_TIME`: Least time consuming
* `LEAST_FEE`: Least cost
* `LEAST_DISTANCE`: Least distance
* `REAL_TRAFFIC`: Driving route planning considering the real traffic condition


## Interface 'DrivingResult'

```webidl
interface DrivingResult {
	readonly attribute DOMString info;
	readonly attribute LngLat orgin;
	readonly attribute LngLat destination;
	readonly attribute Poi originPoi;
	readonly attribute Poi destinationPoi;
	readonly attribute sequence<DriveRoute> routes;
};
```

The `DrivingResult` is driving route planning result returned.
* `info`: Description of success.
* `orgin`: Origin coordinates of planned driving route.
* `destination`: Destination coordinates of planned driving route.
* `originPoi`: Origin POI details of planned driving route.
* `destinationPoi`: Destination POI details of planned driving route.
* `routes`: List of routes. See DriveRoute Interface for more details about the possible values.


## Interface 'DriveRoute'

```webidl
interface DriveRoute {
	readonly attribute long distance;
	readonly attribute long time;
	readonly attribute DrivingPolicy policy;
	readonly attribute sequence<DriveStep> steps;
};
```

* `distance`: Distance from origin to destination. Unit is meter.
* `time`: Estimated time consuming. Unit is second.
* `policy`: Policy of driving route planning.
* `steps`: List of each driving route step. See DriveStep Interface for more details about the possible values.


## Interface 'DriveStep'

```webidl
interface DriveStep {
	readonly attribute LngLat start_location;
	readonly attribute LngLat end_location;
	readonly attribute DOMString instruction;
	readonly attribute DOMString action;
	readonly attribute DOMString orientation;
	readonly attribute DOMString road;
	readonly attribute DOMString distance;
	readonly attribute long time;
	readonly attribute sequence<DOMString> cities;
};
```

* `start_location`: Start location coordinates of this driving route step.
* `end_location`: End location coordinates of this driving route step.
* `instruction`: Instruction of how to drive through this route step.
* `action`: What to do next after arriving the end location of this route step.
* `orientation`: Driving orientation.
* `road`: Road name.
* `distance`: Distance of this route step.
* `time`: Estimated time consuming of this route step. Unit is second.
* `cities`: Name of via cities.

