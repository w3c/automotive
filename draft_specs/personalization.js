///**
// * @static
// *
// * Personalization type enumeration.
// *
// */

module.exports = {};

/**
 *	@memberOf module:car_xyz_personalization
 *	@name personalizationEnum
 *
 *	@description <p>Vehicle personalization property enumeration
 *
 *	@property {String} keyFobID Key fob identifier used to select personalization settings
 * 	@property {String} driverID Driver identifier that controls personalization settings (same as KeyFob unless vehicle has alternative driver selection method) 
 *	@property {String?} language Language identifier based on two-letter codes as specified in ISO 639-1
 *	@property {String?} units Measurement system<br/><i>Enum: unitsEnum</i>
 *	@property {String} unitsFuel Fuel unit of measurement<br/><i>Enum: unitsFuelEnum</i>
 *	@property {String} unitsDistance Distance unit of measurement<br/><i>Enum: unitsDistanceEnum</i>
 *	@property {String} unitsSpeed Speed unit of measurement<br/><i>Enum: unitsSpeedEnum</i>
 *	@property {String} unitsConsumption Fuel consumption unit of measurement<br/><i>Enum: unitsConsumptionEnum</i>
 *	@property {String?} mirrorIndex Index of mirror tilt and pan properties<br/><i>Enum: mirrorIndexEnum</i>
 *	@property {Number?} mirrorNTilt Mirror tilt position in percentage distance travelled, from downward-facing to upward-facing (-100 to 100) position, where 0 represents center position
 * 	@property {Number?} mirrorNPan Mirror pan position in percentage distance travelled, from left to right (-100 to 100) position, where 0 represents center position
 *	@property {Number?} steeringWheelTelescopingPosition Steering wheel position as percentage of extension from the dash, where 0 represents steering wheel positioned closest to dash
 *	@property {Number?} steeringWheelPositionTilt Steering wheel position as percentage of tilt, where 0 represents steering wheel tilted lowest downward-facing position
 *	@property {String?} driveMode Vehicle driving mode<br/><i>Enum: driveModeEnum</i> 
 *	@property {Number?} seatIndex Index of seat properties where 1 represents driver, 2 front passenger
 *	@property {Number?} seatNReclineSeatback Seat back recline position as percentage of distance travelled, from folded-forward position to completely reclined (-100 to 100), where the center 0 represents the seatback upright at a 90 degree angle 
 *	@property {Number?} seatNSlide Seat slide position as percentage of distance travelled away from dash, where 0 represents seat position closest to dash
 *	@property {Number?} seatNCushionHeight Seat cushion height position as a percentage of upward distance travelled, where 0 represents the lowest seat position 
 *	@property {Number?} seatNHeadrest Headrest position as a percentage of upward distance travelled, where 0 represents the lowest headrest position
 *	@property {Number?} seatNBackCushion Back cushion position as a percentage of lumbar curvature, where 0 represents flat, and 100 is maximum curvature
 *	@property {Number?} seatNSideCushion Sides of back cushion position as a percentage of curvature, where 0 represents flat, and 100 is maximum curvature
 *	@property {Number} dashboardIllumination Illumination of dashboard as a percentage, where 0 represents none and 100 maximum illumination 
 *	@property {Boolean} activeNoiseControlMode  Active noise control status, where False is not-activated and True is activated 
 *	@property {String?} engineSoundEnhancementMode Engine sound enhancement mode where a null string means not-activated, and any other value represents a manufacture specific setting
 */

Object.defineProperties(module.exports,
{

		keyFobID:						{ enumerable: true, 	writable: false },
		driverID:						{ enumerable: true, 	writable: false }, 
		language:						{ enumerable: true, 	writable: true },
		units:						{ enumerable: true, 	writable: true },
		unitsFuel:						{ enumerable: true, 	writable: false },
		unitsDistance:					{ enumerable: true, 	writable: false },
		unitsSpeed:					{ enumerable: true, 	writable: false },
		unitsConsumption:				{ enumerable: true, 	writable: false },
		mirrorIndex:					{ enumerable: true, 	writable: true },
		mirrorNTilt:					{ enumerable: true, 	writable: true },
		mirrorNPan:					{ enumerable: true, 	writable: true },
		steeringWheelTelescopingPosition:	{ enumerable: true, 	writable: true },
		steeringWheelPositionTilt:			{ enumerable: true, 	writable: true },
		driveMode:						{ enumerable: true, 	writable: true },
		seatIndex:						{ enumerable: true, 	writable: true },
		seatNReclineSeatback:				{ enumerable: true, 	writable: true },
		seatNSlide:					{ enumerable: true, 	writable: true },
		seatNCushionHeight:				{ enumerable: true, 	writable: true },
		seatNHeadrest:					{ enumerable: true, 	writable: true },
		seatNBackCushion:				{ enumerable: true, 	writable: true },
		seatNSideCushion:				{ enumerable: true, 	writable: true },
		dashboardIllumination:			{ enumerable: true, 	writable: false },
		activeNoiseControlMode:			{ enumerable: true, 	writable: false },
		engineSoundEnhancementMode:		{ enumerable: true, 	writable: true },
});