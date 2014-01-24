///**
// * @static
// *
// * Running Status type enumeration.
// *
// */

module.exports = {};

/**
 *	@memberOf module:car_xyz_runningStatus
 *	@name runningStatusEnum
 *
 *	@description <p>Vehicle running status property enumeration
 *
 *	@property {String} vehiclePowerMode Position of ignition switch<br/><i>Enum: VehiclePowerModeEnum</i>
 *	@property {Number} speedometer Vehicle speed<br/><i>Units: km/h; Range: 0 - 1000; Type:unsigned int</i>
 *	@property {Number} engineSpeed Engine speed in revolutions per minute (RPM)<br/><i>Range: 0 - 100,000; Type:unsigned int</i>
 *	@property {Number} powertrainTorque Powertrain torque<br/><i>Units: Newton meters; Range: 0 - 10,000,000; Type unsigned int</i>
 *	@property {Number} acceleratorPedalPosition Accelerator pedal position as a percentage (0%: released pedal, 100%: fully depressed)
 *	@property {Number} throttlePosition Throttle position as a percentage (0%: closed, 100%: fully open)
 *
 *	@property {Number} tripMeterIndex Writable property; sets which trip meter is queried with tripMeterN properties.<br/>1=Trip meter 1, 2=Trip meter 2, etc. TripMeterN properties return -1 for any non-valid trip meters   
 *	@property {Number} tripMeterNDistance Distance travelled based on trip meter N<br/><i>Units: km; Range: 0 - 100,000,000; Type: unsigned int</i><br/>Returns -1 for any non-valid trip meters set with tripMeterIndex 
 *	@property {Number} tripMeterNAverageSpeed Average speed based on trip meter N<br/><i>Units: km/h; Range: 0 - 1000; Type: unsigned int</i><br/>Returns -1 for any non-valid trip meters set with tripMeterIndex
 *	@property {Number} tripMeterNFuelConsumption Fuel consumed based on trip meter N<br/><i>Units: l/100km; 0.0 - 100.0; Type: float</i><br/>Returns -1 for any non-valid trip meters set with tripMeterIndex
 *
 *	@property {Number} accumulatedEngineRuntime Engine runtime<br/><i>Units: hours; Range: 0 - 1,000,000; Type: unsigned int</i>
 *	@property {Number} distanceWithMILOn Distance travelled with the malfunction indicator light on<br/><i>Units: km; Range: 0 - 100,000,000; Type: unsigned int</i>
 *	@property {Number} distanceSinceCodeCleared Distance travelled since the codes were last cleared<br/><i>Units: km; Range: 0 - 100,000,000; Type: unsigned int</i>
 *	@property {Number} timeRunMILOn Time run with the malfunction indicator light on<br/><i>Units: min; Range: 0 - 100,000,000; Type: unsigned int</i>
 *	@property {Number} timeTroubleCodeClear Time since the trouble codes were last cleared<br/><i>Units: min; Range: 0 - 100,000,000; Type: unsigned int</i>
 *
 *	@property {String} transmissionMode Transmission mode; PRNDL setting (park,neutral,reverse,drive)<br/><i>Enum: TransmissionModeEnum</i>
 *  @property {Number} transmissionGear Transmission gear, typically 1-6. Returns 0 when not applicable (CVT) or not in forward drive (park, neutral or reverse).<br/><i>Range: 0 - 10; Type: unsigned oct</i>
 *
 *	@property {Boolean} cruiseControlStatus Cruise control status (True: on, False: off)
 *	@property {Number} cruiseControlSpeed Cruise control speed<br/><i>Units: km/h; Range: 0 - 1000; Type: unsigned int</i>
 *
 *	@property {Boolean} wheelBrake Status of the wheel brake/emergency brake (True: on, False: off)
 *
 *	@property {Boolean} lightsStatusHead Are head lights lit?
 *	@property {Boolean} lightsStatusHighBeam Is highbeam on?
 *	@property {Boolean} lightsStatusTail Are tail lights lit?
 *	@property {Boolean} lightsStatusBrake Is brake light lit?
 *	@property {Boolean} lightsStatusTurnRight Is left turn indicator currently blinking?
 *	@property {Boolean} lightsStatusTurnLeft Is left turn indicator currently blinking?
 *	@property {Boolean} lightsStatusFogFront Are front fog lights lit?
 *	@property {Boolean} lightsStatusHazard Are hazards flashing?
 *	@property {Boolean} lightsStatusParking Are parking lights on? 
 *
 *	@property {Boolean} interiorLightsStatusDriver Driver interior light status
 *	@property {Boolean} interiorLightsStatusPassenger Passenger interior light status
 *	@property {Boolean} interiorLightsStatusCenter Center interior light status
 *
 *	@property {Boolean} automaticHeadlights Are autonmatic headlights activated?
 *	@property {Boolean} dynamicHighBeam Are dynamic high beams activated?
 *	@property {Boolean} horn Is the horn blaring?
 *	@property {Boolean} chime Is the door open chime binging?
 *
 *	@property {Number} fuelLevel Percentage of fuel remaining (0%..100%)
 *	@property {Number} fuelInstantConsumption Instantaneous reading of the amount of fuel consumed per distance travelled<br/><i>Units: l/100km; Range: 0.0 - 100.0; Type: float</i>
 *	@property {Number} fuelAverageConsumption Average amount of fuel consumed per distance travelled<br/><i>Units: l/100km; Range: 0.0 - 100.0; Type: float</i>
 *	@property {Number} estimatedRange Estimated travel distance, based on current fuel level<br/><i>Units: km; Range: 0 - 10,000; Type: unsigned int</i>
 *	@property {Number} fuelConsumedSinceRestart Fuel consumed since engine start; resets to 0 each restart<br/><i>Units: l; Range: 0 - 1,000; Type: unsigned int</i>
 *	@property {Number} vehicleTimeSinceRestart Time elapsed since vehicle restart<br/><i>Units: min; Range: 0 - 100,000,000; Type: unsigned int</i>
 *
 *	@property {Number} engineOilRemaining Remaining engine oil useful life, as a percentage (0%:oil must be changed, 100%:oil just changed)
 *	@property {Boolean} engineOilChange Engine oil change indicator (true/false)
 *	@property {Number} engineOilTemp Engine oil temperature<br/><i>Units: deg Celsius; Range: 0 - 1000; Type: unsigned int</i>
 *	@property {Number} engineOilPressure Engine oil pressure<br/><i>Units: kPa; Range: 0 - 1000; Type unsigned int</i>
 *
 *	@property {Number} engineCoolantLevel Engine coolant level as a percentage (0%:none, 100%:filled to nominal level)
 *	@property {Number} engineCoolantTemp Engine coolant temperature<br/><i>Units: deg Celcius; Range: 0 - 1000; Type: unsigned int</i>
 *
 *	@property {Number} currentGForce G-force acceleration<br/><i>Units: m/s^2; Range: 0.0 - 100.0; Type: float</i>
 *	@property {Number} steeringWheelAngle Angle of the steering wheel off centerline (used for GPS  dead reckoning- used to track direction in conjunction with wheel tick sensor to track distance covered by the car's wheels)<br/><i>Units:degrees, positive = right of center, negative = left of center; Range: -180.0 - 180.0; Type: float</i>
 *	@property {Number} wheelTickSensor Represents the left/right wheel rotation counter for GPS dead reckoning<br/><i>Units: revolutions; Range: 0 - 1,000,000; Type: unsigned int</i>
 *
 *	@property {Number} latitude Latitude coordinate of the vehicle<br/><i>Units: degrees; Range: -180.0000 - +180.0000; Type: float</i>
 *	@property {Number} longitude Longitude coordinate of the vehicle<br/><i>Units: degrees; Range: -180.0000 - +180.0000; Type: float</i>
 *	@property {Number} altitude Altitude of the vehicle<br/><i>Units: meters above sea level; Range: -1000 - +10,000; Type: float</i>
 *	@property {Number} direction Cardinal direction that the vehicle is facing<br/><i>Units: 0-360 degrees; where 0 = North, 90 = East, 180=South, 270=West. Note that value is not limited to these examples.; Range: 0 - 359; Type: unsigned int</i>
 */


Object.defineProperties(module.exports,
{

		vehiclePowerMode:			{ enumerable: true, 	writable: false },	
		speedometer:				{ enumerable: true, 	writable: false },
		engineSpeed:				{ enumerable: true, 	writable: false },
		powertrainTorque:			{ enumerable: true, 	writable: false },
		acceleratorPedalPosition:	{ enumerable: true, 	writable: false },
		throttlePosition:			{ enumerable: true, 	writable: false },

		tripMeterIndex:				{ enumerable: true, 	writable: true },
		tripMeterNDistance:			{ enumerable: true, 	writable: false },
		tripMeterNAverageSpeed:		{ enumerable: true, 	writable: false },
		tripMeterNFuelConsumption:		{ enumerable: true, 	writable: false },

		accumulatedEngineRuntime:		{ enumerable: true, 	writable: false },
		distanceWithMILOn:			{ enumerable: true, 	writable: false },
		distanceSinceCodeCleared:		{ enumerable: true, 	writable: false },
		timeRunMILOn:				{ enumerable: true, 	writable: false },
		timeTroubleCodeClear:			{ enumerable: true, 	writable: false },

		transmissionMode:			{ enumerable: true, 	writable: false },
		transmissionGear:			{ enumerable: true, 	writable: false },
		
		cruiseControlStatus:			{ enumerable: true, 	writable: false },
		cruiseControlSpeed:			{ enumerable: true, 	writable: false },

		wheelBrake:				{ enumerable: true, 	writable: false },

		lightsStatusHead:			{ enumerable: true, 	writable: false },
		lightsStatusTail:			{ enumerable: true, 	writable: false },
		lightsStatusHighBeam:			{ enumerable: true, 	writable: false },
		lightsStatusTurnRight:		{ enumerable: true, 	writable: false },
		lightsStatusTurnLeft:			{ enumerable: true, 	writable: false },
		lightsStatusBrake:			{ enumerable: true, 	writable: false },
		lightsStatusFogFront:			{ enumerable: true, 	writable: false },
		lightsStatusHazard:			{ enumerable: true, 	writable: false },
		lightsStatusParking:			{ enumerable: true, 	writable: false },
	   
		interiorLightsStatusDriver:	{ enumerable: true, 	writable: false },
		interiorLightsStatusPassenger:	{ enumerable: true, 	writable: false },
		interiorLightsStatusCenter:	{ enumerable: true, 	writable: false },
	   
		automaticHeadlights:			{ enumerable: true, 	writable: false },
		dynamicHighBeam:			{ enumerable: true, 	writable: false },
		horn:						{ enumerable: true, 	writable: false },
		chime:					{ enumerable: true, 	writable: false },
	   
		fuelLevel:					{ enumerable: true, 	writable: false },
		fuelInstantConsumption:		{ enumerable: true, 	writable: false },
		fuelAverageConsumption:		{ enumerable: true, 	writable: false },
		fuelAverageConsumptionSet:		{ enumerable: true, 	writable: true },
		fuelEstimatedRange:			{ enumerable: true, 	writable: false },
		fuelConsumedSinceRestart:		{ enumerable: true, 	writable: false },
		vehicleTimeSinceRestart:		{ enumerable: true, 	writable: false },
	   
		engineOilRemaining:			{ enumerable: true, 	writable: false },
		engineOilChange:			{ enumerable: true, 	writable: false },
		engineOilTemp:				{ enumerable: true, 	writable: false },
		engineOilPressure:			{ enumerable: true, 	writable: false },
	   
		engineCoolantLevel:			{ enumerable: true, 	writable: false },
		engineCoolantTemp:			{ enumerable: true, 	writable: false },
	   
		currentGForce:				{ enumerable: true, 	writable: false },
		steeringWheelAngle:			{ enumerable: true, 	writable: false },
		wheelTickSensor:			{ enumerable: true, 	writable: false },
	   
		latitude:					{ enumerable: true, 	writable: false },		
		longitude:					{ enumerable: true, 	writable: false },
		altitude:					{ enumerable: true, 	writable: false },
		direction:					{ enumerable: true, 	writable: false },
});