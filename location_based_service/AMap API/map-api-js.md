# Map Interface

```javascript
new Map(Node mapDiv, MapOptions opts)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>mapDiv</td>
		<td>Node</td>
		<td>ID value of map container &lt; div &gt; </td>
	</tr>
	<tr>
		<td>opts</td>
		<td>MapOptions</td>
		<td>Carrying the list of map initialization parameters. See MapOptions Interface for more details about the possible values.</td>
	</tr>
</table>



## MapOptions Interface

<table>
	<tr>
		<td>MapOption</td>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td> view </td>
		<td> View2D </td>
		<td> 2D Map view port, to control the attributes that will affect the static display of map, like ‘center’, to control the center of map. See View2D Interface for more details about the possible values. </td>
	</tr>
	<tr>
		<td> level </td>
		<td> Number </td>
		<td> Zoom level </td>
	</tr>
	<tr>
		<td> center </td>
		<td> LngLat </td>
		<td> Coordinate value of map center. See LngLat Interface for more details about the possible values. </td>
	</tr>
	<tr>
		<td> lang </td>
		<td> String </td>
		<td> Displaying language type</td>
	</tr>
	<tr>
		<td> crs </td>
		<td> String </td>
		<td> Reference coordinate system for map view, 'EPSG3857‘, 'EPSG3395‘, 'EPSG4326‘. Default is 'EPSG3857‘ </td>
	</tr>
	<tr>
		<td> isHotspot </td>
		<td> Boolean </td>
		<td> Whether to open map hotspot, default is false </td>
	</tr>
	<tr>
		<td> rotateEnable </td>
		<td> Boolean </td>
		<td> Whether map rotating is supported, default is false </td>
	</tr>
	<tr>
		<td> dragEnable </td>
		<td> Boolean </td>
		<td> Whether map dragging or panning is supported, default is true </td>
	</tr>
	<tr>
		<td> zoomEnable </td>
		<td> Boolean </td>
		<td> Whether map zooming is supported, default is true </td>
	</tr>
	<tr>
		<td> jogEnable </td>
		<td> Boolean </td>
		<td> Whether to use jog effect, default is true </td>
	</tr>
	<tr>
		<td> touchZoom </td>
		<td> Boolean </td>
		<td> Whether map zooming by multi-touch is supported , default is true </td>
	</tr>
	<tr>
		<td> feature </td>
		<td> Array.<String> </td>
		<td> Elements type displayed in map, supporting types include bg (background), point (POI), road, building </td>
	</tr>
</table>


## Methods

### getZoom()

Get the zoom level. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return the map container's zoom level value</td>
	</tr>
</table>

### getLayers()

Get the array of map layers. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Array</td>
		<td>return the array of map layers, including one or more layers</td>
	</tr>
</table>

### getCenter()

Get the coordinate value of map center point. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>LngLat</td>
		<td>return the coordinate value of map center point. See LngLat Interface for more details about the possible values</td>
	</tr>
</table>

### getCity(callback)

Get the region info of map center. Result will be notified through the callback.

### getBounds()

Get the view bounds of current map. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Bounds</td>
		<td>return the view bounds of current map. See Bounds Interface for more details</td>
	</tr>
</table>

### getLang()

Get the language type of map. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>String</td>
		<td>return the language type</td>
	</tr>
</table>

### getSize()

Get the pixel of map container. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Size</td>
		<td>return the pixel of map container. See Size Interface for more details</td>
	</tr>
</table>

### getRotation()

Get the clockwise rotation angle of map. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return the clockwise rotation angle value of map</td>
	</tr>
</table>

### getStatus()

Get the status info of map, including status of map option such as rotateEnable, resizeEnable, dragEnable, zoomEnable, jogEnable, touchZoom, etc. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Object</td>
		<td>return the status info of map</td>
	</tr>
</table>

### getResolution(LngLat point)

Get resolution of given point, unit is meter per pixel. If point is unset, then return the resolution of map. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return resolution of given point, unit is meter per pixel</td>
	</tr>
</table>

### getScale(Number dpi)

Get the scale value of map. Return the reciprocal of scale value of map center point. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return the scale value of map</td>
	</tr>
</table>

### setZoom(Number level)

Set the zoom level of map. 

### setLayers(Array level)

Set the array of map layers. Each element in the array represents one map layer.

### add(Array overlayers)

Add the array of map overlayers. Each element in the array represents one map overlayer. Overlayer types includes marker, circle, polyline and polygon.

### remove(Array overlayers)

Remove the array of map overlayers. Each element in the array represents one map overlayer. Overlayer types includes marker, circle, polyline and polygon.

### getAllOverlayers(type)

Get the array of map overlayers accoording to overlayer type (marker, circle, polyline or polygon). If type is not set, then all types of overlayers are returned. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Object</td>
		<td>return the array of map overlayers</td>
	</tr>
</table>

### setCenter(LngLat position)

Set the coordinate value of map center point.

### setZoomAndCenter(Number zoomLevel, LngLat center)

Set the zoom level and the coordinate value of map center point.

### setCity(String city)

Set the map center point according to administrative region.

### setBounds(Bounds bound)

Set the display bounds of current map.

### setLang(String lang)

Set the language type of map.

### setRotation(Number rotation)

Set the clockwise rotation angle of map.

### setStatus(Object status)

Set the status info of map, including status of map option such as rotateEnable, resizeEnable, dragEnable, zoomEnable, jogEnable, touchZoom, etc.

### zoomIn()

Zoom in map.

### zoomOut()

Zoom out map.

### panTo(LngLat position)

Pan the map center point to given position.

### panBy(Number X, Number Y)

Pan the map along x direction and y direction, by pixel. x is positive rightward, y is positive downward.

### pixelToLngLat(Pixel pixel, Number level)

Convert the map pixel coordinates to latitude and longitude coordinates, according to map zoom level.

### lngLatToPixel(LngLat lnglat, Number level)

Convert the latitude and longitude coordinates to map pixel coordinates, according to map zoom level.

### clearMap()

Clear all the overlayers in map.

### destroy()

Destroy the map object and clear the map container.



## View2D Interface

```javascript
new View2D(View2DOptions opt)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>opt</td>
		<td>View2DOptions</td>
		<td>Carrying the list of 2D map initialization parameters. See View2DOptions Interface for more details about the possible values.</td>
	</tr>
</table>

### View2DOptions Interface

<table>
	<tr>
		<td>View2DOption</td>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>center</td>
		<td>LngLat</td>
		<td>Coornidates of map center.See LngLat Interface for more details about the possible values. </td>
	</tr>
	<tr>
		<td>rotation</td>
		<td>Number</td>
		<td>Clockwise rotation angle of map. </td>
	</tr>
	<tr>
		<td>zoom</td>
		<td>Number</td>
		<td>Zoom level. </td>
	</tr>
	<tr>
		<td>crs</td>
		<td>String</td>
		<td>Reference coordinate system for map view, 'EPSG3857‘, 'EPSG3395‘, 'EPSG4326‘. Default is 'EPSG3857'. </td>
	</tr>
</table>


## LngLat Interface

```javascript
new LngLat(Number lng, Number lat)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>lng</td>
		<td>Number</td>
		<td>longitude value</td>
	</tr>
	<tr>
		<td>lat</td>
		<td>Number</td>
		<td>latitude value</td>
	</tr>
</table>


### Methods

#### offset(Number w, Number s)

Get new coordinate value by moving w meters in longitude and s meters in latitude. w is positive rightward, s is positive upward. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>LngLat</td>
		<td>return a new coordinate</td>
	</tr>
</table>

#### distance(LngLat lnglat)

Get the distance by meter between current lnglat and this passed-in lnglat, unit is meter. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return distance by meter between current lnglat and this passed-in lnglat</td>
	</tr>
</table>

#### getLng()

Get current longitude. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Float</td>
		<td>return current longitude</td>
	</tr>
</table>

#### getLat()

Get current latitude. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Float</td>
		<td>return current latitude</td>
	</tr>
</table>


## Bounds Interface

```javascript
new Bounds(LngLat southWest, LngLat northEast)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>southWest</td>
		<td>LngLat </td>
		<td>coordinates of rectangle southwest point</td>
	</tr>
	<tr>
		<td>northEast</td>
		<td>LngLat </td>
		<td>coordinates of rectangle northeast point</td>
	</tr>
</table>

### Methods

#### contains(LngLat point)

Whether the passed-in point is within the range of rectangle. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Boolean</td>
		<td>1 means the passed-in point is within the range of rectangle</td>
	</tr>
</table>

#### getCenter()

Get center coordinates of bounds. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>LngLat</td>
		<td>return center coordinates of bounds </td>
	</tr>
</table>

#### getSouthWest( )

Get southwest coordinates of bounds. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>LngLat</td>
		<td>return southwest coordinates of bounds</td>
	</tr>
</table>

#### getNorthEast()

Get northeast coordinates of bounds. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>LngLat</td>
		<td>return northeast coordinates of bounds</td>
	</tr>
</table>


## Size Interface

```javascript
new Size(Number width, Number height)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>width</td>
		<td>Number </td>
		<td>unit is pixel</td>
	</tr>
	<tr>
		<td>height</td>
		<td>Number </td>
		<td>unit is pixel</td>
	</tr>
</table>

### Methods

#### getWidth()

Get width value of Size Object. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return width value of Size Object</td>
	</tr>
</table>

#### getHeight()

Get height value of Size Object. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return height value of Size Object</td>
	</tr>
</table>


## Pixel Interface

```javascript
new Pixel(Number x, Number y)
```

<table>
    <tr>
        <td>Name</td>
		<td>Type</td>
		<td>Description</td>
    </tr>
	<tr>
		<td>x</td>
		<td>Number </td>
		<td>x direction value of Pixel object</td>
	</tr>
	<tr>
		<td>y</td>
		<td>Number </td>
		<td>y direction value of Pixel object</td>
	</tr>
</table>

### Methods

#### getX()

Get x direction value of Pixel object. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return x direction value of Pixel object</td>
	</tr>
</table>

#### getY()

Get y direction value of Pixel object. Return:

<table>
	<tr>
		<td>Type</td>
		<td>Description</td>
	</tr>
	<tr>
		<td>Number</td>
		<td>return y direction value of Pixel object</td>
	</tr>
</table>




