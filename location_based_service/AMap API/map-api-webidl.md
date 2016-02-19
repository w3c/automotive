# Map API

Map API packages a set of function, like map display, user interaction, etc.

# Interface

## Interface 'Map'

```webidl
[Constructor(Node mapDiv, MapOptions opts)]
interface Map {
	Promise<any> setProperty(DOMString propertyName, any newValue);
    Promise<any> getProperty(DOMString propertyName);
	Bounds getBounds();
	void setBounds(Bounds bound);
	long getResolution(LngLat point);
	void zoomIn();
	void zoomOut();
	void panTo(LngLat position);
	void panBy(long x, long y);
	LngLat pixelToLngLat(Pixel pixel, long level);
	Pixel lngLatToPixel(LngLat lnglat, long level);
};
```

`Map` is the main interface to interact with a map. A `Map` instance can be returned by using the Map constructor that accepts a 'Node' and a `MapOptions` as input.
* `setProperty()`: set a new value for a property defined in the map options.
* `getProperty()`: get the value of a property defined in the map options.
* `getBounds()`: get the view bounds of current map. See Bounds Interface for more details about the possible values.
* `setBounds()`: set the view bounds of current map. See Bounds Interface for more details about the possible values.
* `getResolution()`: Get resolution of given point, unit is meter per pixel. If point is unset, then return the resolution of map.
* `zoomIn()`: Zoom in map.
* `zoomOut()`: Zoom out map.
* `panTo()`: Pan the map center point to given position as input.
* `panBy()`: Pan the map along x direction and y direction, by pixel. x is positive rightward, y is positive downward.
* `pixelToLngLat()`: Convert the map pixel coordinates to latitude and longitude coordinates, according to map zoom level.
* `lngLatToPixel()`: Convert the latitude and longitude coordinates to map pixel coordinates, according to map zoom level.


## Interface 'MapOptions'

```webidl
dictionary MapOptions {
	View2D view;
	Boolean isHotspot;
	Boolean rotateEnable;
	Boolean dragEnable;
	Boolean zoomEnable;
	Boolean jogEnable;
	Boolean touchZoom;
	sequence<DOMString> features;
};
```

A 'MapOptions' is a dictionary that is passed as input to the 'Map' constructor. It may be extended in the future with additional option properties. The current supported option properties are:
* `view`: 2D Map view port. It controls the attributes that will affect the static display of map, like ‘center’ that controls the center of map. See View2D Interface for more details about the possible values.
* `isHotspot`: It defines whether to open map hotspot function, default is false.
* `rotateEnable`: It defines whether to open map rotating function, default is false.
* `dragEnable`: It defines whether to open map dragging or panning function, default is true.
* `zoomEnable`: It defines whether to open map zooming function, default is true.
* `jogEnable`: It defines whether to use jog effect, default is true.
* `touchZoom`: It defines whether to open map zooming by multi-touch function, default is true.
* `features`: It configures the elements types that will be displayed in map, supporting types include bg (background), point (POI), road, building.


## Interface 'View2D'

```webidl
[Constructor(View2DOptions opts)]
interface View2D {
	
};
```

A `View2D` instance can be returned by using the View2D constructor that accepts a `View2DOptions` as input.

## Interface 'View2DOptions'

```webidl
dictionary MapOptions {
	LngLat center;
	long rotation;
	long zoom;
};
```

A 'View2DOptions' is a dictionary that is passed as input to the 'View2D' constructor. It may be extended in the future with additional option properties. The current supported option properties are:
* `center`: Coornidates of map center.See LngLat Interface for more details about the possible values. 
* `rotation`: Clockwise rotation angle of map.
* `zoom`: It defines the zoom level of map.

## Interface 'LngLat'

```webidl
[Constructor(float lng, float lat)]
interface LngLat {
	LngLat offset(long w, long s);
	long distance(LngLat lnglat);
	float getLng();
	float getLat();
};
```

`LngLat` is used to define a point on map. A `LngLat` instance can be returned by using the LngLat constructor that accepts a longitude and a latitude as input.

* `offset()`: Get new coordinate value by moving w meters in longitude and s meters in latitude. w is positive rightward, s is positive upward.
* `distance()`: Get the distance between current lnglat and this passed-in lnglat. Unit is meter.
* `getLng()`: Get current longitude value.
* `getLat()`: Get current latitude value.


## Interface 'Bounds'

```webidl
[Constructor(LngLat southWest, LngLat northEast)]
interface Bounds {
	Boolean contains(LngLat point);
	LngLat getCenter();
	LngLat getSouthWest();
	LngLat getNorthEast();
}
```

`Bounds` is used to define a rectangle bound on map. A `Bounds` instance can be returned by using the Bounds constructor that accepts a southwest point coordinates value and a northeast point coordinates as input.

* `contains()`: Get that whether the passed-in point is within the range of bound.
* `getCenter()`: Get center coordinates of bound.
* `getSouthWest()`: Get southwest point coordinates of bound.
* `getNorthEast()`: Get northeast point coordinates of bound.

## Interface 'Pixel'

```webidl
[Constructor(long x, long y)]
interface Pixel {
	long getX();
	long getY();
}
```

`Pixel` is used to define a pixel object on map. A `Pixel` instance can be returned by using the Pixel constructor that accepts a x direction value and y direction value as input.

* `getX()`: Get the x direction value of Pixel object.
* `getY()`: Get the y direction value of Pixel object.



## Example `Create Map instance`
```javascript
var map = new AMap.Map('mapContainer',{
	rotateEnable: true,
	//2D map view port object
	view: new AMap.View2D({
		//Set map center point 
		center: new LngLat(116.397428, 39.90923),
		//Set zoom level
		zoom: 12
		//Set rotation: 10
	})
});
```

