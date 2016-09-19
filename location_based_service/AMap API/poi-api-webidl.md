# POI API

POI API packages a set of function, to provide POI search service.

# Interface

## Interface 'POI'

```webidl
[Constructor(PlaceSearchOptions opts)]
interface PlaceSearch {
	Promise<any> setProperty(DOMString propertyName, any newValue);
    Promise<any> getProperty(DOMString propertyName);
	void search(DOMString keyword, SearchCallback whenSearched);
	void searchNearBy(DOMString keyword, LngLat center, long radius, SearchCallback whenSearched);
	void searchInBounds(DOMString keyword, Bounds bounds, SearchCallback whenSearched);
};
callback SearchCallback = void(DOMString status, (SearchResult or DOMString) result);
```

`PlaceSearch` is the main interface to deal with POI search. A `PlaceSearch` instance can be returned by using the PlaceSearch constructor that accepts a `PlaceSearchOptions` as input.
* `setProperty()`: set a new value for a property defined in the PlaceSearch options.
* `getProperty()`: get the value of a property defined in the PlaceSearch options.
* `search()`: Search the POI according to keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.
* `searchNearBy()`: Search the POI according to circular region (center point coordinates, radius) and keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.
* `searchInBounds()`: Search the POI according to rectangular region and keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.


## Interface 'PlaceSearchOptions'

```webidl
dictionary PlaceSearchOptions {
	DOMString city;
	DOMString type;
	DOMString extensions;
};
```

A 'PlaceSearchOptions' is a dictionary that is passed as input to the 'PlaceSearch' constructor. It may be extended in the future with additional option properties. The current supported option properties are:
* `city`: City of POI. Format can be as city name or city code or administrative code.
* `type`: Type of POI. If more than one, separate by ‘|’, like ‘Cinema | Hotel’.
* `extensions`: Choose either 'base' or 'all'. ‘base’: return basic POI info; ‘all’: return basic and detailed POI info.


## Interface 'SearchResult'

```webidl
interface SearchResult {
	readonly attribute DOMString info;
	readonly attribute PoiList poiList;
	readonly attribute sequence<DOMString> keywordList;
	readonly attribute sequence<CityInfo> cityList;
};
```

The `SearchResult` is POI search result returned.
* `info`: Description of success.
* `poiList`: POI list returned. See PoiList Interface for more details about the possible values.
* `keywordList`: Keyword list. If no match is found according to the given keyword, then return the suggested keyword list.
* `cityList`: City list. If no match is found according to the given keyword, then return the suggested city list. Each city item contains at least one POI item. See CityInfo Interface for more details about the possible values.


## Interface 'CityInfo'

```webidl
interface CityInfo {
	readonly attribute DOMString name;
	readonly attribute DOMString citycode;
	readonly attribute DOMString adcode;
	readonly attribute long count;
};
```

The `CityInfo` is the description of city info.
* `name`: City name.
* `citycode`: City code.
* `adcode`: Administrative region code.
* `count`: Total number of POI results of this city.


## Interface 'PoiList'

```webidl
interface PoiList {
	readonly attribute sequence<Poi> pois;
	readonly attribute long count;
};
```

* `pois`: List of POI details. See Poi Interface for more details about the possible values.
* `count`: Total number of POI results.


## Interface 'Poi'

```webidl
interface Poi {
	readonly attribute DOMString id;
	readonly attribute DOMString name;
	readonly attribute DOMString type;
	readonly attribute LngLat location;
	readonly attribute DOMString address;
	readonly attribute long distance;
	readonly attribute DOMString tel;
	readonly attribute DOMString website;
	readonly attribute DOMString pcode;
	readonly attribute DOMString citycode;
	readonly attribute DOMString adcode;
	readonly attribute DOMString postcode;
	readonly attribute DOMString pname;
	readonly attribute DOMString cityname;
	readonly attribute DOMString adname;
	readonly attribute DOMString email;
	readonly attribute LngLat entr_location;
	readonly attribute LngLat exit_location;
};
```
