# TimeMilliConverter

## Installation

```bash
npm i timemilliconverter
```

## Usage

### Overview

```js
const timestring = require('timemilliconverter')

let str = '1h 15m'
let time = timestring.getTimeString(str)

console.log(time) // will log 4500
```

**By default the returned time value from `getTimeString` will be in milliseconds.**

The time string can contain as many time groups as needed:

```js
const timestring = require('timemilliconverter')

let str = '1d 3h 25m 18s'
let time = timestring.getTimeString(str)

console.log(time) // will log 98718
```

and can be as messy as you like:

```js
const timestring = require('timemilliconverter')

let str = '1 d    3HOurS 25              min         1   8s'
let time = timestring.getTimeString(str)

console.log(time) // will log 98718
```

### Keywords

`getTimeString` will parse the following keywords into time values:

1. `ms, milli, millisecond, milliseconds` - will parse to milliseconds
2. `s, sec, secs, second, seconds` - will parse to seconds
3. `m, min, mins, minute, minutes` - will parse to minutes
4. `h, hr, hrs, hour, hours` - will parse to hours
5. `d, day, days` - will parse to days
6. `w, week, weeks` - will parse to weeks
7. `mon, mth, mths, month, months` - will parse to months
8. `y, yr, yrs, year, years` - will parse to years

Keywords can be used interchangeably:

```js
const timestring = require('timemilliconverter')

let str = '1day 15h 20minutes 15s'
let time = timestring.getTimeString(str)

console.log(time) // will log 141615
```

### Return Time Value

By default the return time value will be in milliseconds. This can be changed by passing one of the following strings as an argument to `getTimeString`:

1. `ms` - Milliseconds
2. `s` - Seconds
3. `m` - Minutes
4. `h` - Hours
5. `d` - Days
6. `w` - Weeks
7. `mth` - Months
8. `y` - Years

```js
const timestring = require('timemilliconverter')

let str = '22h 16m'

let hours = timestring.getTimeString(str, 'h')
let days = timestring.getTimeString(str, 'd')
let weeks = timestring.getTimeString(str, 'w')

console.log(hours) // will log 22.266666666666666
console.log(days) // will log 0.9277777777777778
console.log(weeks) // will log 0.13253968253968254
```