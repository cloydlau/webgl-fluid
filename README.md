# webgl-fluid

**ES module support for https://github.com/PavelDoGreat/WebGL-Fluid-Simulation**

<br/>

### Features

- √ ES module
- √ Configurable
- √ 0 dependency
- √ Hover to activate by default, can also be Click
- √ Support for background image
- √ Control whether to trigger multiple random splats when initialized

<br/>

### Quick Start
![NPM](https://nodei.co/npm/webgl-fluid.png)
``` bash
$ yarn add webgl-fluid
```

<br/>

```js
import WebglFluid from 'webgl-fluid'

// Ready to go
WebglFluid(document.querySelector('canvas'))

// Changing default configuration
WebglFluid(document.querySelector('canvas'), {
  IMMEDIATE: true, // Whether to trigger multiple random splats when initialized
  TRIGGER: 'hover', // Can be change to 'click'
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 1,
  VELOCITY_DISSIPATION: 0.2,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 30,
  SPLAT_RADIUS: 0.25,
  SPLAT_FORCE: 6000,
  SHADING: true,
  COLORFUL: true,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: false,
  BLOOM: true,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.8,
  BLOOM_THRESHOLD: 0.6,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: true,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 1.0,
})
```

<br/>

Example for Vue

```vue
<template>
  <canvas ref="canvas"/>
</template>

<script>
import WebglFluid from 'webgl-fluid'

export default {
  mounted () {
    WebglFluid(this.$refs.canvas)
  }
}
</script>

<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
```

<br/>

Background image

css

```css
canvas {
  width: 100vw;
  height: 100vh;
  background-image: url("back.png");
  background-size: 100% 100%;
}
```

js

```js
WebglFluid(document.querySelector('canvas'), {
  TRANSPARENT: true
})
```
