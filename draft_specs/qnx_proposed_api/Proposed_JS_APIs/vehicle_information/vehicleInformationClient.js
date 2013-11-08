
/**
 * @module car_xyz_vehicleInformation
 * @static
 *
 * @description Provides access to vehicle information
 */



var _self = {},
	_ID = require("./manifest.json").namespace,
	_callback = require('./../../lib/callback'),
	Event = require('./enum/Event');

	_self.VehicleInformation = require('./enum/VehicleInformation');
	_self.VehicleType = require('./enum/VehicleType');
	_self.FuelType = require('./enum/FuelType');
	_self.RefuelPosition = require('./enum/RefuelPosition');
	_self.TransmissionGearType = require('./enum/TransmissionGearType');
	

/**
 * Watch for vehicleInformation changes
 * @param {Function} callback The function to be called when a change is detected
 * @return {Number} An id for the added watch
 * @memberOf module:car_xyz_vehicleInformation
 * @method watchVehicleInformation
 * @example
 * 
 * //define a callback function
 * function myCallback(vehicleInformationData) {
 *		//iterate through all the vehicleInformation items
 *		var vehicleInformation = Object.keys(vehicleInformationData);
 *		for (var i=0; i&lt;vehicleInformation.length; i++) {
 *			console.log("vehicleInformation data name = " + vehicleInformation[i] + "; vehicleInformation value = " + vehicleInformationData[vehicleInformation[i]]);
 *		}
 * }
 * 
 * var watchId = car.vehicleInformation.watchVehicleInformation(myCallback);
 */

_self.watchVehicleInformation = function (callback) {
	return _callback.watch(Event.UPDATE, callback);
};



/**
 * Stop watching vehicleInformation changes
 * @param {Number} watchId The watch id returned by <i>car.vehicleInformation.watchVehicleInformation()</i>.
 * @memberOf module:car_xyz_vehicleInformation
 * @method cancelWatch
 * @example
 * 
 * car.vehicleInformation.cancelWatch(watchId);
 */

_self.cancelWatch = function (watchId) {
	_callback.cancelWatch(watchId);
};


/**
 * @desc <p>Return the current vehicle information data
 * <p>If successful, <i>car.vehicleInformation.get()</i> calls the <i>successCallback</i> function with an object describing the available vehicle information, and the values.
 * @param {Function} successCallback The callback that is called with the result on success.
 * @param {Function} errorCallback (Optional) The callback that is called if there is an error.
 * @param {Array}  (Optional) A list of car.vehicleInformation.VehicleInformation values to whitelist. Ex: ['VIN', 'fuelType', ...]
 * @memberOf module:car_xyz_vehicleInformation
 * @method get
 * @example 
 *
 * //define your callback function(s)
 * function successCallback(vehicleInformationData) {
 *		//iterate through all the vehicleInformation data
 *		var vehicleInformation = Object.keys(vehicleInformationData);
 *		for (var i=0; i&lt;vehicleInformation.length; i++) {
 *			console.log("vehicleInformation name = " + vehicleInformation[i] + "; vehicleInformation value = " + vehicleInformationData[vehicleInformation[i]]);
 *		}
 *
 *		//get the VIN
 *		if (typeof vehicleInformationData[car.vehicleInformationData.VehicleInformation.VIN] !== 'undefined') {
 *			console.log("VIN = " + vehicleInformationData[car.vehicleInformation.VehicleInformation.VIN]);
 *		}
 * }
 *
 * function errorCallback(error) {
 *		console.log(error.code, error.message);
 * }
 *
 * //Optional: define a list of vehicleInformation by which to filter
 * var vehicleInformationFilter = [ car.vehicleInformation.VehicleInformation.VIN, car.vehicleInformation.VehicleInformation.vehicleType ];
 * 
 *
 * //call the method
 * car.vehicleInformation.get(successCallback, errorCallback, vehicleInformationFilter);
 *
 *
 * @example REST
 *
 * Request:
 * http://<car-ip>/car/vehicleInformation/get?vehicleInformation=VIN,vehicleType
 *
 * Response:
 * { VIN: 1M8GDM9AXKP042788, vehicleType: sedan }
 *
 */
_self.get = function (successCallback, errorCallback, vehicleInformation) {
	//if (filter) {
	    // do something
	//} else {
	    // do something else
	//}	  	  
};


// Export
module.exports = _self;
