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
 * @property {Number} width Widest dimension of the vehicle (not including the side mirrors)<br/>Units: meters</i>
 * @property {Number} height Distance from the ground to the highest point of the vehicle (not including antennas)<br/><i>Units: meters</i>
 * @property {Number} length Distance from front bumper to rear bumper<br/><i>Units: meters</i>
 *
 * @property {Number} doorCountRow1 Number of doors in the first row 
 * @property {Number} doorCountRow2 Number of doors in the second row 
 * @property {Number} doorCountRow3 Number of doors in the third row 
 * @property {Number} totalDoors Total number of doors on the vehicle (all doors opening to the interior, including hatchbacks) 
 *
 * @property {String} fuelType Type of fuel<br/><i>Enum: FuelTypeEnum</i>
 * @property {String} secondaryFuelType Type of secondary fuel (for bi-fuel vehicles, or fuel for electric hybrids, etc)<br/><i>Enum: FuelTypeEnum</i>
 * @property {String} refuelPosition Side of the vehicle with access to the fuel door<br/><i>Enum: RefuelPositionEnum</i>
 * @property {String} transmissionGearType Transmission gear type<br/><i>Enum: TransmissionGearTypeEnum</i>
 *
 * @property {Number} wheelInfoRadius Radius of the wheel<br/><i>Units: cm</i>
 * @property {Number} frontWheelRadius Radius of the front wheels<br/><i>Units: cm</i>
 * @property {Number} rearWheelRadius Radius of the rear wheels<br/><i>Units: cm</i>
 * @property {Number} wheelInfoTrack Count of complete wheel revolutions for GPS dead reckoning
 *
 * @property {String} brand Vehicle brand name 
 * @property {String} model Model type 
 * @property {Number} year Model year (integer) 
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
	wheelInfoTrack: 		{ enumerable: true, 		writable: false },	
	brand: 				{ enumerable: true, 		writable: false }, 	
	model: 				{ enumerable: true, 		writable: false },	
	year: 				{ enumerable: true, 		writable: false },	
	steeringWheelLeft: 		{ enumerable: true, 		writable: false },	
});


