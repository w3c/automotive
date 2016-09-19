# Geocoder API

Geocoder API packages a set of function, to provide Forward Geocoding and Reverse Geocoding service.

# Interface

## Interface 'Geocoder'

```webidl
[Constructor(GeocoderOptions opts)]
interface Geocoder {
	getLocation(DOMString address, SearchCallback whenSearched);
	getAddress((LngLat or sequence<LngLat>) location, SearchCallback whenSearched);
	void setCity(DOMString city);
};
callback SearchCallback = void(DOMString status, (GeocodeResult or ReGeocodeResult or DOMString) result);
```

`Geocoder` is the main interface to deal with Forward Geocoding and Reverse Geocoding service. A `Geocoder` instance can be returned by using the Geocoder constructor that accepts a `GeocoderOptions` as input.
* `getLocation()`: Forward geocoding. Obtain the geographic coordinates according to address description. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then location info result is returned. See GeocodeResult Interface for more details about the possible values.
* `getAddress()`: Reverse geocoding. Obtain the address description according to geographic coordinates. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then road info result is returned. See ReGeocodeResult Interface for more details about the possible values.
* `setCity()`: Set the city within which to do searching.

## Interface 'GeocoderOptions'

```webidl
dictionary GeocoderOptions {
	attribute DOMString city;
	attribute long radius;
	DOMString extensions;
};
```

A 'GeocoderOptions' is a dictionary that is passed as input to the 'Geocoder' constructor. It may be extended in the future with additional option properties. The current supported option properties are:
* `city`: City of Geocoder. Format can be as city name or city code or administrative code.
* `radius`: Used in reverse geocoding. Set the range of searching area.
* `extensions`: Used in reverse geocoding. Choose either 'base' or 'all'. ‘base’: default, return basic address info; ‘all’: return basic and optional detailed address info.

## Interface 'GeocodeResult'

```webidl
interface GeocodeResult {
	readonly attribute DOMString info;
	readonly attribute sequence<LngLat> location;
};
```

The `GeocodeResult` is getLocation result returned.
* `info`: Description of success.
* `geocodes`: location list.

## Interface 'ReGeocodeResult'

```webidl
interface ReGeocodeResult {
	readonly attribute DOMString info;
	readonly attribute DOMString address;
};
```

The `ReGeocodeResult` is getAddress result returned.
* `info`: Description of success.
* `regeocode`: address description result.










