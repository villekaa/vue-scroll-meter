# vue-scroll-meter
![David](https://img.shields.io/david/villekaa/vue-scroll-meter)
![GitHub file size in bytes](https://img.shields.io/github/size/villekaa/vue-scroll-meter/src/vue-scroll-meter.js)
![npm](https://img.shields.io/npm/dm/vue-scroll-meter)
##### Simple scroll meter plugin for vue.

## Demo
[vue-scroll-meter](http://villekaa.github.io/vue-scroll-meter)

![Alt Text](https://i.imgur.com/9TbLXN7.gif)
## Installation

```javascript
npm install vue-scroll-meter
```
```javascript
yarn add vue-scroll-meter
```
## Usage

```javascript
// main.js
import Vue from 'vue'
import VueScrollMeter from 'vue-scroll-meter'

Vue.use(VueScrollMeter, { /* Optional */ })
```
### Options

| Parameters    | Type          |  Example      |  Description  |
| ------------- |:-------------:|:-------------:|:-------------:|
| color         | String	    | red           |  hex, rgb     |
| opacity       | Number        | .4            |  0 - 1        |
| height        | Number        | 10            |  pixels       |
| delay         | Number        | 1             |  seconds      |

## License
[MIT](https://choosealicense.com/licenses/mit/)