# VISS - Vehicle Information Service Specification Explainer

Modern vehicles use hundreds of sensors which produce thousands of different data points, or signals, amounting to terabytes of data per vehicle per day. 
There is no question vehicles are transforming, becoming connected, electric and autonomous all of which relies extensively on signals data. 
To facilitate innovation and development on various use cases the W3C established a strategic alliance with COVESA and formed the Common Vehicle Interface 
Initiative (CVII). At the center of this effort is a common data model for these vehicle signals, namely the Vehicle Signal Specification (VSS). 
The W3C Automotive Working Group is creating the means to access this data in a standardized way with the Vehicle Information Service Specification (VISS).
The service can reside either in the vehicle, or in the cloud. Client applications  can also reside in the vehicle, cloud or running on a nomad device 
such as a smartphone. 


Vehicle signals, the definition and access to them, has historically been OEM proprietary. This has made it difficult for suppliers, commercial fleets, 
tech companies and other interested parties to integrate across vehicle brands. Furthermore, since VISS and VSS are open standards their use will reduce 
cost, promote innovation, interoperability and facilitate third party software development.

VSS uses a tree structure with well defined open definitions, but it also has the ability to be extended to handle new and /or proprietary signals if 
needed. The transport and the access (API) is defined by the VISS specification, it  includes HTTPS, MQTT, as well as Websockets which was the only 
transport protocol supported in the first version. The second and current version of the specification includes a complete access control model, and 
filtering techniques to better fit OEM requirements. 

_Notes on implementation and use_

VISS has known implementations by Volvo, BMW, JLR, AWS Fleetwise, Renesas, Bosch, Visteon, Geotab, AGL and Mitsubishi Electric to name a few. 
The underlying data model VSS is seeing much wider adoption since its uses go far beyond a single API.
General use for telematics - include EV, insurance, ...

The [W3C / COVESA CVII](https://wiki.covesa.global/display/WIK4/Common+Vehicle+Interface+Initiative+-+Home) is broad in scope and VISS is an important 
component, to address needs within the vehicle, cloud, AI/knowledge graph, service and solution level all centered on the common vehicle data model VSS.

VISS is a vital component in the realization of telematics use cases, such as fleet management, electric vehicle charging, driver behavior based 
vehicle insurance, etc. 
A standards based interface, and data model, supports interoperability between vehicle brands, and thus enables an open ecosystem where innovation of 
new services can thrive.
