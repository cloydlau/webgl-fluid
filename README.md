# WebGL Fluid <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[npm-version-svg]: https://versionbadg.es/cloydlau/webgl-fluid.svg
[package-url]: https://npmjs.com/package/webgl-fluid

<p align="left">
  <a href="https://www.npmjs.com/package/webgl-fluid?activeTab=dependencies"><img alt="zero dependencies" src="https://img.shields.io/badge/dependencies-0-green.svg"></a>
  <a href="https://bundlephobia.com/package/webgl-fluid"><img alt="minzipped size" src="https://img.shields.io/bundlephobia/minzip/webgl-fluid"></a>
  <a href="https://npmcharts.com/compare/webgl-fluid"><img alt="downloads" src="https://img.shields.io/npm/dt/webgl-fluid"></a>
  <a href="https://eslint.org"><img alt="code style" src="https://img.shields.io/badge/code_style-ESLint-4B32C3.svg?logo=eslint"></a>
  <a href="https://conventionalcommits.org"><img alt="conventional commits" src="https://img.shields.io/badge/commits-Conventional-FE5196.svg?logo=conventionalcommits&logoColor=white"></a>
</p>

> ES Module support for https://github.com/PavelDoGreat/WebGL-Fluid-Simulation.

🕹 [Online Playground](https://cloydlau.github.io/demo/webgl-fluid.html)

<br>

## Features

- Hover to activate by default, can also be Click
- Background image
- Control whether to trigger multiple random splats initially

<br>

## Install

### NPM

```ts
import WebGLFluid from 'webgl-fluid'

WebGLFluid(document.querySelector('canvas'), {
  // options
})
```

<a name="CDN"></a>

### CDN + ESM

```html
<!DOCTYPE html>
<html lang="en">
<body>
<canvas style="width: 100vw; height: 100vh;" />
<script type="importmap">
  {
    "imports": {
      "webgl-fluid": "https://unpkg.com/webgl-fluid@0.3/dist/webgl-fluid.mjs"
    }
  }
</script>
<script type="module">
import WebGLFluid from 'webgl-fluid'

WebGLFluid(document.querySelector('canvas'), {
  // options
})
</script>
</body>
</html>
```

### CDN + UMD

```html
<!DOCTYPE html>
<html lang="en">
<body>
<canvas style="width: 100vw; height: 100vh;" />
<script src="https://unpkg.com/webgl-fluid@0.3"></script>
<script>
WebGLFluid(document.querySelector('canvas'), {
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
  VELOCITY_DISSIPATION: 0.3,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 30,
  SPLAT_RADIUS: 0.35,
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

## Background Image

CSS

```css
canvas {
    width: 100vw;
    height: 100vh;
    background-image: url("xxx.png");
    background-size: 100% 100%;
}
```

JS

```ts
WebGLFluid(document.querySelector('canvas'), {
  TRANSPARENT: true
})
```

<br>

## Example

### Vanilla

See [CDN](#CDN).

<br>

### Vue 3

```vue
<template>
  <canvas ref="canvas" />
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

### Vue 2

```vue
<template>
  <canvas ref="canvas" />
</template>

<script>
import WebGLFluid from 'webgl-fluid'

export default {
  mounted() {
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

<br>

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/cloydlau/webgl-fluid/releases).

<br>
