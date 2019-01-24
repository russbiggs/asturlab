<div style="text-align:center">
<img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Al-Ashraf_compass_and_qibla_diagram.png' style="width:300px;"/>
</div>

# Asturlab -  ٱلأَسْطُرلاب‎

A small JavaScript library to calculate the qibla (direction to the kaaba in Mecca) from a given coordinate pair. Calculates using [great-circle](https://en.wikipedia.org/wiki/Great-circle_distance) (default) or a [rhumb line](https://en.wikipedia.org/wiki/Rhumb_line). Most of the code adaptions of the calculations in the source code are directly from or adapted from [turf.js](http://turfjs.org/), however turf is not a dependency.

## Installation

```sh
npm install asturlab
```

## Usage

Available in AMD, CJS, IIFE (with compatible version down to IE10) and ES6 Module.

### In the browser

#### as an ES6 Module
```js
import asturlab from 'asturlab';
```

### from a script tag

```html
<script src="path/to/dist/asturlab-iife.min.js"></script>
```

### In node
```js
const asturlab = require('asturlab');
const qibla = asturlab([32.123, 54.321]);
// qibla is now the bearing to the kaaba in degrees
```

## API

__asturlab(coordinates[, options]])__

```coordinates``` is a \[x,y\] (long, lat) pair of decimal degree coordinates in WGS84

```options``` supported:

* ``` rhumb ``` - boolean, sets calculation to use rhumb line instead of great circle
