# W3C Automotive Services Explainer
## Status: PUBLIC
## Last Updated: 2018-07-27

## Introduction:

The W3C Automotive Working Group is creating standards to expose services within vehicles using Web Technology. Specifically we areworking on signals, media (services and library), navigation, notifications with potentially others to follow.

Of the various areas, signals has been the most important. In addition to being useful for applications interacting with the vehicle operator and passengers, it enables data sampling and edge computing before sending to the cloud for fleet management, insurance discounts based on driver behavior, urban planning, traffic management etc. Vehicles for the last couple decades have moved from mechanical to more electronic, various components are a mix of silicon, software and mechanical with these various electronic control units (ECU) communicating to one another over local networks. Some data elements are static such as the vehicle identification number but most are dynamic and change frequently, every few milliseconds. Each auto manufacturer handles signals somewhat differently and there is a strong need for a common data model and standard method to access these signals.

W3C collaborates with GENIVI, an automotive consortium, and is leveraging [their data model VSS](https://github.com/GENIVI/vehicle_signal_specification/). Currently there are over 800 signals with many more intended as electric and driver-assist / autonomous (eg lidar) vehicle signals are being added.

We are developing specifications that allows applications through the use of web technologies to access signals from vehicle sensors and to carry out actions via the vehicle actuators. The next version of the specification is planned to include also other data domains, such as media and navigation. The applications can reside anywhere - inside the vehicle, on smartphones and in the cloud - as long as security and privacy constraints are met. Automotive big data is a significant use case for this standards work and we recently launched a task force on it.

### Goals
* Reduce industry fragmentation and provide consistency
* Create a common robust ecosystem for applications
* Reasonably intuitive to developers at large and not limited to automotive embedded systems engineers since this is meant to bridge different industries and services
* Consistency in defined access method for different services (signals, media...)

Many auto manufacturers have created their own SDK yet have not been very successful at attracting third party developers. With so many makes and models with an expected runtime of 12 years apiece there are simply too many platforms for content providers to support.

This standards work will directly benefit OEMs, content providers and enable various types of new businesses to more tightly integrate with transportation. 

### Non-goals

Navigation is a very complex area and discussions are ongoing with various companies in this space. The draft spec we received based on VW's approach provides access to some rudimentary information but is not capable of being used for creating a full navigation system.

## Detailed design discussion

### Discovery

Initially we expected single services for the different areas (signals, media etc) and to only be available on a vehicle LAN, used solely by the head unit (In-Vehicle Infotainment system - car stereo and computer combined). As such we went with a simple approach initially, a fixed hostname. This topic reappeared and never sat well with many, requiring explanation of the basic premise stated earlier of single services for single client devices. Such a design is too limiting and there are scenarios with the potential for multiple services and clients. The specification was updated to promote discovery without settling on a means in particular although multicast DNS was getting the most consideration. We are waiting for more implementation experience and weighing options for a second version, potentially drawing from the ViWi registry approach.

### Sockets vs HTTP

Vehicle signals change frequently, every few milliseconds, and in addition to applications running on the head unit needing realtime information, some are looking to replace the dashboard (tach, speedometer, etc) using our signal service. A constantly available data stream from Web Sockets is more appropriate than incessant HTTP GET requests for things like vehicle speed. There are other use cases where an application needs information once or infrequently and should not be keeping a data connection open which is more condusive to HTTP.

Sockets do not make sense for services with more static information, such as accessing a media library available on the vehicle.

HTTP2's connections need to be re-established regularly but otherwise closer to our needs. Fetch has potential as well.

## Considered alternatives

### WebIDL

The W3C Automotive Web Platform Business Group produced draft specifications for creating first class vehicle objects to browser runtimes. When the Automotive Working Group was chartered it was to further this start. 

The industry is split between HTML5, Qt, Java and other programming frameworks not to mention applications that do not need to interact with a user would suffer from the added overhead of relying on them with finite computing resources available within the vehicle. A browser only approach would be useful for too restrictive of an audience.

Adding signals as new technology such as lidar is applied to vehicles would require updates to the specification, creating a new access method for each new signal (eg: vehicle.getLidarDistance("front", "left")). Having a data model separate from the access method specification is more desireable. We intend to snapshot the data model and assign version information to it that will be conveyed through the service specification.

### Sensors API

At the Sapporo TPAC the W3C Auto WG met with various other groups including Device and Sensors group. They were persuasive in encouraging the auto group to explore their approach, representing the vehicle as a collection of sensors. This was explored for some time and the thought exercise led us to reconsider and ultimately abandon the earlier WebIDL approach. Representing a vehicle as a collection of sensors however we resolved was not the best fit (@@Kevin).

### WoT

We have similarly met with the W3C Web of Things Working Group on multiple occasions. While again having similar needs to other standards work at W3C (Sensors), a vehicle is a very specialized thing in the IoT requiring a vehicle centric approach. We are continuing to collaborate with WoT as see some potential areas of mutual interest. Samsung and ETRI have created a proof of concept based on W3C Vehicle Information Service Specification (VISS) in OCF.

### ViWi

VW was following our activity and appreciated the switch we made to a service based approach that was somewhat similar to theirs. With varying architecture across their different brands (VW, Audi, Scania, Porsche, Skoda...) they are a microcosm for the auto industry, needing a consistent means to access information and having difficulty attracting content providers to write applications for a proprietary solution. They joined W3C and contributed their Volkswagen Infotainment Web Interface (ViWi).  The W3C Auto group also refers to this as Restful Service Interface (RSI) instead of the branded ViWi.

[Volkswagen Submission] (https://www.w3.org/Submission/2016/01/)

The group was already invested in Vehicle Information Service Specification (VISS) yet agreed there are cases where HTTP REST is more suitable. The group resolved to continue advancing VISS and examine converging the two approaches.

[Convergence topics] (https://www.w3.org/auto/wg/wiki/VISS-RSI-convergence-framework)

## References & acknowledgements

Your design will change and be informed by many people; acknowledge them in an ongoing way! It helps build community and, as we only get by through the contributions of many, is only fair.

Too many to list... maybe compile later for Emmy awards acceptance speech.
