///**
// * @static
// *
// * Running Status type enumeration.
// *
// */

module.exports = {};

/**
 *	@memberOf module:car_xyz_runningStatus
 *	@name RunningStatusEnum
 *
 *	@description <p>Vehicle running status property enumeration
 *
 *	@property {String} vehiclePowerMode Position of ignition switch<br/><i>Enum: VehiclePowerModeEnum</i>
 *	@property {Number} speedometer Vehicle speed<br/><i>Units: km/h</i>
 *	@property {Number} engineSpeed Engine speed in revolutions per minute (RPM)
 *	@property {Number} powertrainTorque Powertrain torque<br/><i>Units: Newton meters</i>
 *	@property {Number} acceleratorPedalPosition Accelerator pedal position as a percentage (0%: released pedal, 100%: fully depressed)
 *	@property {Number} throttlePosition Throttle position as a percentage (0%: closed, 100%: fully open)
 *
 *	@property {Number} tripMeter1Distance Distance travelled based on trip meter 1<br/><i>Units: km</i>
 *	@property {Number} tripMeter2Distance Distance travelled based on trip meter 2<br/><i>Units: km</i>
 *	@property {Number} tripMeter1AverageSpeed Average speed based on trip meter 1<br/><i>Units: km/h</i> 
 *	@property {Number} tripMeter2AverageSpeed Average speed based on trip meter 2<br/><i>Units: km/h</i>
 *	@property {Number} tripMeter1FuelConsumption Fuel consumed based on trip meter 1<br/><i>Units: l/100km</i>
 *	@property {Number} tripMeter2FuelConsumption Fuel consumed based on trip meter 2<br/><i>Units: l/100km</i>
 *
 *	@property {Number} accumulatedEngineRuntime Engine runtime<br/><i>Units: hours</i>
 *	@property {Number} distanceWithMILOn Distance travelled with the malfunction indicator light on<br/><i>Units: km</i>
 *	@property {Number} distanceSinceCodeCleared Distance travelled since the codes were last cleared<br/><i>Units: km</i>
 *	@property {Number} timeRunMILOn Time run with the malfunction indicator light on<br/><i>Units: min</i>
 *	@property {Number} timeTroubleCodeClear Time since the trouble codes were last cleared<br/><i>Units: min</i>
 *
 *	@property {String} transmissionGear Transmission gear status<br/><i>Enum: TransmissionGearStatusEnum</i>
 *
 *	@property {Boolean} cruiseControlStatus Cruise control status (True: on, False: off)
 *	@property {Number} cruiseControlSpeed Cruise control speed<br/><i>Units: km/h</i>
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
 *	@property {Number} fuelInstantConsumption Instantaneous reading of the amount of fuel consumed per distance travelled<br/><i>Units: l/100km</i>
 *	@property {Number} fuelAverageConsumption Average amount of fuel consumed per distance travelled<br/><i>Units: l/100km</i>
 *	@property {Number} estimatedRange Estimated travel distance, based on current fuel level<br/><i>Units: km</i>
 *	@property {Number} fuelConsumedSinceRestart Fuel consumed since engine start; resets to 0 each restart<br/><i>Units: l</i>
 *	@property {Number} vehicleTimeSinceRestart Time elapsed since vehicle restart<br/><i>Units: min</i>
 *
 *	@property {Number} engineOilRemaining Remaining engine oil useful life, as a percentage (0%:oil must be changed, 100%:oil just changed)
 *	@property {Boolean} engineOilChange Engine oil change indicator (true/false)
 *	@property {Number} engineOilTemp Engine oil temperature<br/><i>Units: deg Celsius</i>
 *	@property {Number} engineOilPressure Engine oil pressure<br/><i>Units: kPa</i>
 *
 *	@property {Number} engineCoolantLevel Engine coolant level as a percentage (0%:none, 100%:filled to nominal level)
 *	@property {Number} engineCoolantTemp Engine coolant temperature<br/><i>Units: deg Celcius</i>
 *
 *	@property {Number} currentGRead G-force acceleration<br/><i>Units: m/s^2</i>
 *	@property {Number} steeringWheelAngle Angle of the steering wheel off centerline (used for GPS  dead reckoning- used to track direction in conjunction with wheel tick sensor to track distance covered by the car's wheels)<br/><i>Units:degrees</i>
 *	@property {Number} wheelTickSensor Represents the left/right wheel rotation counter for GPS dead reckoning<br/><i>Units: revolutions</i>
 *
 *	@property {Number} latitude Latitude coordinate of the vehicle
 *	@property {Number} longitude Longitude coordinate of the vehicle
 *	@property {Number} altitude Altitude of the vehicle<br/><i>Units: meters above sea level</i>
 *	@property {String} direction Cardinal direction of the vehicle<br/><i>Enum: DirectionEnum</i>
 */


Object.defineProperties(module.exports,
{

		vehiclePowerMode:			{ enumerable: true, 	writable: false },	
		speedometer:				{ enumerable: true, 	writable: false },
		engineSpeed:				{ enumerable: true, 	writable: false },
		powertrainTorque:			{ enumerable: true, 	writable: false },
		acceleratorPedalPosition:	{ enumerable: true, 	writable: false },
		throttlePosition:			{ enumerable: true, 	writable: false },

		tripMeter1Distance:			{ enumerable: true, 	writable: false },
		tripMeter2Distance:			{ enumerable: true, 	writable: false },
		tripMeter1AverageSpeed:		{ enumerable: true, 	writable: false },
		tripMeter2AverageSpeed:		{ enumerable: true, 	writable: false },
		tripMeter1FuelConsumption:		{ enumerable: true, 	writable: false },
		tripMeter2FuelConsumption:		{ enumerable: true, 	writable: false },

		accumulatedEngineRuntime:		{ enumerable: true, 	writable: false },
		distanceWithMILOn:			{ enumerable: true, 	writable: false },
		distanceSinceCodeCleared:		{ enumerable: true, 	writable: false },
		timeRunMILOn:				{ enumerable: true, 	writable: false },
		timeTroubleCodeClear:			{ enumerable: true, 	writable: false },

		transmissionGearStatus:		{ enumerable: true, 	writable: false },
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
	   
		currentGRead:				{ enumerable: true, 	writable: false },
		steeringWheelAngle:			{ enumerable: true, 	writable: false },
		wheelTickSensor:			{ enumerable: true, 	writable: false },
	   
		latitude:					{ enumerable: true, 	writable: false },		
		longitude:					{ enumerable: true, 	writable: false },
		altitude:					{ enumerable: true, 	writable: false },
		direction:					{ enumerable: true, 	writable: false },
});