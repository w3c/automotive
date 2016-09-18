# RoadInfoSearch API

RoadInfoSearch API packages a set of function, to provide road info search service.

# Interface

## Interface 'RoadInfoSearch'

```webidl
[Constructor(DOMString city)]
interface RoadInfoSearch {
	attribute DOMString city;
	void roadInfoSearchByRoadId(DOMString id, SearchCallback whenSearched);
	void roadInfoSearchByRoadName(DOMString keyword, SearchCallback whenSearched);
	void crossInfoSearchByCrossId(DOMString id, SearchCallback whenSearched);
	void crossInfoSearchByCrossName(DOMString keyword, SearchCallback whenSearched);
	void setCity(DOMString city);
};
callback SearchCallback = void(DOMString status, (RoadInfoSearchResult or CrossInfoSearchResult or DOMString) result);
```

`RoadInfoSearch` is the main interface to deal with road info search. A `RoadInfoSearch` instance can be returned by using the RoadInfoSearch constructor that accepts a `DOMString` as input.
* `city`: City name or city code. The city within which to search the road info. If more than one, separate by ‘|’.
* `roadInfoSearchByRoadId()`: Search the road info result according to road id. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then road info result is returned. See RoadInfoSearchResult Interface for more details about the possible values.
* `roadInfoSearchByRoadName()`: Search the road info result according to road name. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then road info result is returned. See RoadInfoSearchResult Interface for more details about the possible values.
* `crossInfoSearchByCrossId()`: Search the crossroad info result according to crossroad id. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then road info result is returned. See CrossInfoSearchResult Interface for more details about the possible values.
* `crossInfoSearchByCrossName()`: Search the crossroad info result according to crossroad name. Result will be notified through the callback. If status is ‘error’, then  error info is returned; if status is ‘complete’, then road info result is returned. See CrossInfoSearchResult Interface for more details about the possible values.
* `setCity()`: Set the city within which to do searching.


## Interface 'RoadInfoSearchResult'

```webidl
interface RoadInfoSearchResult {
	readonly attribute DOMString info;
	readonly attribute sequence<RoadInfo> roadInfoList;
	readonly attribute sequence<DOMString> keywordList;
	readonly attribute sequence<DOMString> cityList;
};
```

The `RoadInfoSearchResult` is road info result returned.
* `info`: Description of success.
* `roadInfoList`: List of road info returned. See RoadInfo Interface for more details about the possible values.
* `keywordList`: If no match found, return the list of recommended keywords.
* `cityList`: If no match found in the chosen city, return the list of recommended cities.


## Interface 'RoadInfo'

```webidl
interface RoadInfo {
	readonly attribute DOMString id;
	readonly attribute DOMString name;
	readonly attribute LngLat center;
	readonly attribute DOMString citycode;
	readonly attribute sequence<LngLat> path;
};
```

* `id`: Road id.
* `name`: Road name.
* `center`: Coordinates of road center.
* `citycode`: City code.
* `path`: List of point coordinates through the road.


## Interface 'CrossInfoSearchResult'

```webidl
interface CrossInfoSearchResult {
	readonly attribute DOMString info;
	readonly attribute sequence<CrossInfo> roadInfoList;
	readonly attribute sequence<DOMString> keywordList;
	readonly attribute sequence<DOMString> cityList;
};
```

The `CrossInfoSearchResult` is crossroad info result returned.
* `info`: Description of success.
* `roadInfoList`: List of crossroad info returned. See CrossInfo Interface for more details about the possible values.
* `keywordList`: If no match found, return the list of recommended keywords.
* `cityList`: If no match found in the chosen city, return the list of recommended cities.


## Interface 'CrossInfo'

```webidl
interface CrossInfo {
	readonly attribute DOMString id;
	readonly attribute LngLat location;
	readonly attribute DOMString firstRoadId;
	readonly attribute DOMString firstRoadName;
	readonly attribute DOMString secondRoadId;
	readonly attribute DOMString secondRoadName;
	readonly attribute DOMString citycode;
};
```

* `id`: Crossroad id.
* `location`: Crossroad location coordinates.
* `firstRoadId`: Road id of one of the roads.
* `firstRoadName`: Road name of one of the roads.
* `secondRoadId`: Road id of the other road.
* `secondRoadName`: Road name of the other road.
* `citycode`: City code.

