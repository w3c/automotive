///**
// * @static
// *
// * Vehicle Information type enumeration.
// *
// */

module.exports = {};

/**	
 * @memberOf module:car_xyz_vehicleInformation
 * @name VehicleInformationEnum
 *
 * @description <p>Vehicle information property enumeration
 *
 * @property {String} WMI World Manufacturer Identifier
 * @property {String} VIN Vehicle Identification Number
 * @property {String} vehicleType Type of vehicle<br/><i>Enum: VehicleTypeEnum</i>
 * @property {Number} width Widest dimension of the vehicle (not including the side mirrors)<br/>Units: meters; Range: 0 - 10; Type: unsigned octet</i><br/>Note: Number may be an approximation, and should not be expected to be exact.
 * @property {Number} height Distance from the ground to the highest point of the vehicle (not including antennas)<br/><i>Units: meters; Range: 0 - 10; Type: unsigned octet</i><br/>Note: Number may be an approximation, and should not be expected to be exact.
 * @property {Number} length Distance from front bumper to rear bumper<br/><i>Units: meters; Range: 0 - 10; Type: unsigned octet</i><br/>Note: Number may be an approximation, and should not be expected to be exact.
 *
 * @property {Number} doorCounts Returns list of car doors, organized in "rows" with number doors in each row.<br/>For individual elements==>Range: 0 - 3; Type: unsigned octet; (NOTE TO EDITORS: DO NOT KNOW IF A LIST AS DESCRIBED CAN BE REPRESENTED IN WEBIDL--MAY NEED TO REDO THIS.)<br/>For example, two door coupe would return {2}, four door sedan would return {2, 2}, four door SUV with hatchback would return {2, 2, 1}, etc.  
 * @property {Number} totalDoors Total number of doors on the vehicle (all doors opening to the interior, including hatchbacks)<br/><i>Range: 0 - 10; Type: unsigned octet;</i> 
 *
 * @property {String} fuelType Type of fuel<br/><i>Enum: FuelTypeEnum</i>
 * @property {String} secondaryFuelType Type of secondary fuel (for bi-fuel vehicles, or fuel for electric hybrids, etc)<br/><i>Enum: FuelTypeEnum</i>
 * @property {String} refuelPosition Side of the vehicle with access to the fuel door<br/><i>Enum: RefuelPositionEnum</i>
 * @property {String} transmissionGearType Transmission gear type<br/><i>Enum: TransmissionGearTypeEnum</i>
 *
 * @property {Number} wheelInfoRadius Radius of the wheel<br/><i>Units: cm; Range: 0 - 1000; Type: unsigned int</i>
 * @property {Number} frontWheelRadius Radius of the front wheels<br/><i>Units: cm; Range: 0 - 1000; Type: unsigned int</i>
 * @property {Number} rearWheelRadius Radius of the rear wheels<br/><i>Units: cm; Range: 0 - 1000; Type: unsigned int</i>
 *
 * @property {String} brand Vehicle brand name 
 * @property {String} model Model type 
 * @property {Number} year Model year (integer)<br/><i>Range:2000 - 2100; Type: unsigned int</i> 
 * @property {Boolean} steeringWheelLeft True if the steeringwheel is on the left of the vehicle 
 */


Object.defineProperties(module.exports,
{
	WMI:					{ enumerable: true, 		writable: false }, 	
	VIN:					{ enumerable: true, 		writable: false }, 	
	vehicleType:			{ enumerable: true, 		writable: false },	
	width:				{ enumerable: true, 		writable: false },	
	height:				{ enumerable: true, 		writable: false },	
	length:				{ enumerable: true, 		writable: false },	
	doorCountRow1:			{ enumerable: true, 		writable: false },	
	doorCountRow2:			{ enumerable: true, 		writable: false },	
	doorCountRow3:			{ enumerable: true, 		writable: false },	
	totalDoors:			{ enumerable: true, 		writable: false },	
	fuelType:				{ enumerable: true, 		writable: false },	
	secondaryFuelType:		{ enumerable: true, 		writable: false },	
	refuelPosition:			{ enumerable: true, 		writable: false },	
	transmissionGearType: 	{ enumerable: true, 		writable: false },	
	wheelRadius: 			{ enumerable: true, 		writable: false },	
	frontWheelRadius: 		{ enumerable: true,		writable: false },	
	rearWheelRadius: 		{ enumerable: true, 		writable: false },	
	brand: 				{ enumerable: true, 		writable: false }, 	
	model: 				{ enumerable: true, 		writable: false },	
	year: 				{ enumerable: true, 		writable: false },	
	steeringWheelLeft: 		{ enumerable: true, 		writable: false },	
});


