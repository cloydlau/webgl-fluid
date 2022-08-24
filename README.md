# webgl-fluid

ES Module support for https://github.com/PavelDoGreat/WebGL-Fluid-Simulation.

🤹‍♂️ [Online Playground](https://cloydlau.github.io/demo/webgl-fluid.html)

<br>

## Features

- ESM & UMD
- Configurable
- 0 dependency, 21kb gziped
- Hover to activate by default, can also be Click
- Support background image
- Control whether to trigger multiple random splats initially

<br>

## Installation

![NPM](https://nodei.co/npm/webgl-fluid.png)

<br>

NPM

```ts
import WebGLFluid from 'webgl-fluid'

WebGLFluid(document.querySelector('canvas'), {
  // options
})
```

<br>

Without bundler / CDN

```html
<!DOCTYPE html>
<html lang="en">
<body>
<canvas style="width: 100vw; height: 100vh;"/>
<script src="https://unpkg.com/webgl-fluid@0.2"></script>
<script>
window['webgl-fluid'](document.querySelector('canvas'), {
  // options
})
</script>
</body>
</html>
```

<br>

Module Script

```html
<!DOCTYPE html>
<html lang="en">
<body>
<canvas style="width: 100vw; height: 100vh;"/>
<script type="module">
import WebglFluid from 'https://unpkg.com/webgl-fluid@0.2/dist/webgl-fluid.mjs'

WebglFluid(document.querySelector('canvas'), {
  // options
})
</script>
</body>
</html>
```

<br>

## Options

```ts
WebGLFluid(document.querySelector('canvas'), {
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

<br>

## Background image

css

```css
canvas {
    width: 100vw;
    height: 100vh;
    background-image: url("xxx.png");
    background-size: 100% 100%;
}
```

js

```ts
WebGLFluid(document.querySelector('canvas'), {
  TRANSPARENT: true
})
```

<br>

## Example for Vue 3

```vue

<template>
  <canvas ref="canvas"/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import WebGLFluid from 'webgl-fluid'

const canvas = ref()

onMounted(() => {
  WebGLFluid(canvas.value)
})
</script>

<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
```

<br>

## Example for Vue 2

```vue

<template>
  <canvas ref="canvas"/>
</template>

<script>
import WebGLFluid from 'webgl-fluid'

export default {
  mounted () {
    WebGLFluid(this.$refs.canvas)
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
