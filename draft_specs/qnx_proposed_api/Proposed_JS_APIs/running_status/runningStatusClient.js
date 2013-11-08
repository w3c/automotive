
/**
 * @module car_xyz_runningStatus
 * @static
 *
 * @description Provides access to vehicle running status properties data
 */



var _self = {},
	_ID = require("./manifest.json").namespace,
	_callback = require('./../../lib/callback'),
	Event = require('./enum/Event');

	_self.RunningStatus = require('./enum/RunningStatus');
	_self.RunningStatus = require('./enum/Direction');
	_self.RunningStatus = require('./enum/TransmissionGearStatus');
	_self.RunningStatus = require('./enum/VehiclePowerMode');


/**
 * Watch for runningStatus changes
 * @param {Function} callback The function to be called when a change is detected
 * @return {Number} An id for the added watch
 * @memberOf module:car_xyz_runningStatus
 * @method watchRunningStatus
 * @example
 * 
 * //define a callback function
 * function myCallback(runningStatusData) {
 *		//iterate through all the runningStatus items
 *		var runningStatus = Object.keys(runningStatusData);
 *		for (var i=0; i&lt;runningStatus.length; i++) {
 *			console.log("runningStatus name = " + runningStatus[i] + "; runningStatus value = " + runningStatusData[runningStatus[i]]);
 *		}
 * }
 * 
 * var watchId = car.runningStatus.watchRunningStatus(myCallback);
 */

_self.watchRunningStatus = function (callback) {
	return _callback.watch(Event.UPDATE, callback);
};


/**
 * Stop watching runningStatus changes
 * @param {Number} watchId The watch id returned by <i>car.runningStatus.watchRunningStatus()</i>.
 * @memberOf module:car_xyz_runningStatus
 * @method cancelWatch
 * @example
 * 
 * car.runningStatus.cancelWatch(watchId);
 */

_self.cancelWatch = function (watchId) {
	_callback.cancelWatch(watchId);
};


/**
 * @desc <p>Return the current running status data
 * <p>If successful, <i>car.runningStatus.get()</i> calls the <i>successCallback</i> function with an object describing the available running status, and the values.
 * @param {Function} successCallback The callback that is called with the result on success
 * @param {Function} errorCallback (Optional) The callback that is called if there is an error
 * @param {Array}  (Optional) A list of car.runningStatus.RunningStatus values to whitelist. Ex: ['cruiseControlStatus', 'horn', ...]
 * @memberOf module:car_xyz_runningStatus
 * @method get
 * @example 
 *
 * //define your callback function(s)
 * function successCallback(runningStatusData) {
 *		//iterate through all the runningStatus data
 *		var runningStatus = Object.keys(runningStatusData);
 *		for (var i=0; i&lt;runningStatus.length; i++) {
 *			console.log("runningStatus name = " + runningStatus[i] + "; runningStatus value = " + runningStatusData[runningStatus[i]]);
 *		}
 *
 *		//get the fuel level
 *		if (typeof runningStatusData[car.runningStatusData.RunningStatus.fuelLevel] !== 'undefined') {
 *			console.log("Fuel level = " + runningStatusData[car.runningStatus.RunningStatus.fuelLevel]);
 *		}
 * }
 *
 * function errorCallback(error) {
 *		console.log(error.code, error.message);
 * }
 *
 * //Optional: define a list of runningStatus items by which to filter
 * var runningStatusFilter = [ car.runningStatus.RunningStatus.fuelLevel, car.runningStatus.RunningStatus.horn ];
 * 
 *
 * //call the method
 * car.runningStatus.get(successCallback, errorCallback, runningStatusFilter);
 *
 *
 * @example REST
 *
 * Request:
 * http://<car-ip>/car/runningStatus/get?runningStatus=fuelLevel,horn
 *
 * Response:
 * { fuelLevel: 50, horn: 0 }
 *
 */
_self.get = function (successCallback, errorCallback, runningStatus) {
	//if (filter) {
	    // do something
	//} else {
	    // do something else
	//}	  	  
};


// Export
module.exports = _self;
