# VISS - Vehicle Information Service Specification Explainer

Modern vehicles use hundreds of sensors which produce thousands of different data points, or signals, amounting to terabytes of data available per vehicle per day. There are thousands of signals or data points available on modern vehicles ranging from door lock state, fuel or charge level to tire pressure sensors and anti-lock brake control unit status. There is no question vehicles are transforming, becoming connected, electric and autonomous all of which relies extensively on signals data. 
To facilitate innovation and development on various use cases the W3C established a strategic alliance with [COVESA](https://covesa.global).

At the center of this effort is a common data model for these vehicle signals, namely the Vehicle Signal Specification ([VSS](https://covesa.github.io/vehicle_signal_specification/)) which has its own [explainer](https://www.covesa.global/sites/default/files/COVESA%20Vehicle%20Signal%20Specification_060122.pdf). The W3C Automotive Working Group is creating the means to access this data in a standardized way with the Vehicle Information Service Specification (VISS). The service can reside either in the vehicle, or in the cloud. Client applications can also reside in the vehicle, cloud or running on a nomad device such as a smartphone. 

Vehicle signals, the definition and access to them, has historically been OEM proprietary. This has made it difficult for suppliers, commercial fleets, 
tech companies, insurance companies, regulators and other interested parties to integrate across vehicle brands. Furthermore, since VISS and VSS are open standards their use will reduce cost, promote innovation, interoperability and facilitate third party software development.

VSS uses a tree structure with well defined open definitions, but it also has the ability to be extended to handle new and /or proprietary signals if 
needed. The [transport](https://www.w3.org/standards/history/viss2-transport) and [access (API)](https://www.w3.org/TR/viss2-core/) together comprise by the VISS version 2 specification, it includes HTTPS, MQTT, as well as Websockets which was the only 
transport protocol supported in the [first version of VISS](https://www.w3.org/TR/vehicle-information-service/). The second and current version of the VISS includes a complete access control model, and filtering techniques to better fit OEM requirements. 

The intention is to use web technologies to facilitate development of applications with limited, trusted entities and to not make vehicles available for arbitrary connections over the web. Access to specific data points and use of the information is outside of the scope of this work. It is expected automotive manufacturers will govern which parties can run logic on or against vehicles, manage permissions, conduct security and legal/privacy audits. Regulators and courts, [Massachussets Right to Repair lawsuit as an example](https://www.natlawreview.com/article/automakers-lawsuit-opposing-updates-to-massachusetts-right-to-repair-law-lingers), will undoubtedly influence this as well. The W3C Automotive Working Group, together with the COVESA Security and Data Expert Groups will likely produce formal best practices which will include security and privacy aspects.

VISS version 1 deferred on access control to individual implementations and as mentioned only supported Websockets. Of the thousands of data points potentially available, a client application could subscribe to an allowed subset, receive initial and updated values over time. The second version expanded on the filters available for Websocket subscriptions and allows for individual requests over HTTPS or MQTT of individual signals or if allowed a logical branch of signals. For example, requesting /Vehicle/Drivetrain/Transmission would, if authorized, return all data available for a vehicle's transmission. 

_Notes on implementation and use_

VISS has known implementations by Volvo, BMW, JLR, Renesas, Bosch, Visteon, Geotab, AGL and Mitsubishi Electric to name a few. 
The underlying data model VSS is seeing much wider adoption, eg within AWS Fleetwise or accompanying ontology ([VSSo](https://www.w3.org/TR/vsso/)) for machine learning, since its uses go far beyond a single API.

A client application for example could reside on the vehicle itself on an on-board logic, telematics or head unit. From there it can authenticate itself against VISS and based on permissions granted for the specific application, can read or even write data to/from the vehicle. Applications may be user facing, providing information to operator or occupants or performing data sampling for analysis.

There are multiple uses for vehicle telematics data. Electric vehicle charging events can be combined with charging infrastructure, route planning and weather conditions to plan trips on a vehicles' behalf and ensure battery is not depleted. Insurance companies use it, with owner/operator permission and typically in exchange for a discount on premium, to assess driving behavior. Fleet operators and mechanic services can assess vehicles performance and predict maintenance issues before they arise and leave a vehicle stranded. Information about a vehicles' status, location, fuel/charge level, diagnostics, etc can be conveyed to the owner on the head unit/in-vehicle infotainment or a trusted, paired smartphone. 

The [W3C / COVESA CVII](https://wiki.covesa.global/display/WIK4/Common+Vehicle+Interface+Initiative+-+Home) is broad in scope and VISS is an important 
component, to address needs within the vehicle, cloud, AI/knowledge graph, service and solution level all centered on the common vehicle data model VSS.

A standards based interface, and data model, supports interoperability between vehicle brands, and thus enables an open ecosystem where innovation of 
new services can thrive.
