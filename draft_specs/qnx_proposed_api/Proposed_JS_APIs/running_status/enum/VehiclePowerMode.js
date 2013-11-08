///**
// * @name car.runningStatus.VehiclePowerMode
// * @static
// *
// * VehiclePowerModeEnum type enumeration.
// *
// */

module.exports = {};

/**	
 *	@name VehiclePowerModeEnum
 *	@memberOf module:car_xyz_runningStatus
 *	@description <p> Vehicle power mode enumeration
 *
 *	@property {String} lock Lock position 
 *	@property {String} off Off position
 *	@property {String} acc Accessories position 
 *	@property {String} on On position
 *	@property {String} start Start position 
 */


Object.defineProperties(module.exports,
{
	lock:			{ enumerable: true, 	writable: false }, 	
	off:			{ enumerable: true, 	writable: false },		   
	acc:			{ enumerable: true, 	writable: false },
	on:			{ enumerable: true, 	writable: false },
	start:		{ enumerable: true, 	writable: false },
});