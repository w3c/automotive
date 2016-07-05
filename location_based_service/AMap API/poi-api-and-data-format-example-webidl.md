# POI API and Data format WebIDL

# POI API example

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
callback SearchCallback = void(DOMString status, (sequence<Poi> or DOMString) result);
```

`PlaceSearch` is the main interface to deal with POI search. A `PlaceSearch` instance can be returned by using the PlaceSearch constructor that accepts a `PlaceSearchOptions` as input.
* `setProperty()`: set a new value for a property defined in the PlaceSearch options.
* `getProperty()`: get the value of a property defined in the PlaceSearch options.
* `search()`: Search the POI according to keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.
* `searchNearBy()`: Search the POI according to circular region (center point coordinates, radius) and keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.
* `searchInBounds()`: Search the POI according to rectangular region and keyword. Result will be notified through the callback. See SearchResult Interface for more details about the possible values.



# POI Data format example

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
	readonly attribute DOMString deep_type;
	readonly attribute Dining dining;
	readonly attribute Hotel hotel;
	readonly attribute Cinema cinema;
	readonly attribute Scenic scenic;
};
```


## Interface 'Dining'

```webidl
interface Dining {
	readonly attribute DOMString cuisines;
	readonly attribute DOMString tag;
	readonly attribute DOMString intro;
	readonly attribute DOMString rating;
	readonly attribute DOMString src;
	readonly attribute DOMString cost;
	readonly attribute DOMString recommend;
	readonly attribute DOMString atmosphere;
	readonly attribute DOMString ordering_url;
	readonly attribute DOMString opentime;
};
```


## Interface 'Hotel'

```webidl
interface Hotel {
	readonly attribute DOMString intro;
	readonly attribute DOMString rating;
	readonly attribute DOMString src;
	readonly attribute DOMString star;
	readonly attribute DOMString lowest_price;
	readonly attribute DOMString traffic;
};
```


## Interface 'Cinema'

```webidl
interface Cinema {
	readonly attribute DOMString intro;
	readonly attribute DOMString rating;
	readonly attribute DOMString src;
	readonly attribute DOMString opentime;
};
```


## Interface 'Scenic'

```webidl
interface Scenic {
	readonly attribute DOMString intro;
	readonly attribute DOMString rating;
	readonly attribute DOMString src;
	readonly attribute DOMString price;
	readonly attribute DOMString season;
	readonly attribute DOMString ordering_url;
	readonly attribute DOMString opentime;
};
```
