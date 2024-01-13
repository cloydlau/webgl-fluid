<h1 align="center">
  <a href="https://npmjs.com/package/webgl-fluid" target="_blank" rel="noopener noreferrer">
    WebGL Fluid <sup><img alt="version" src="https://img.shields.io/npm/v/webgl-fluid.svg?style=flat-square&color=white&label="></sup>
  </a>
</h1>

<p align="center">
  ES Module support for <a href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation">WebGL-Fluid-Simulation</a>.
  <br>
  🕹 <a href="https://cloydlau.github.io/demo/webgl-fluid.html">Playground</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/webgl-fluid?activeTab=dependencies"><img alt="zero dependencies" src="https://badgen.net/bundlephobia/dependency-count/webgl-fluid"></a>
  <a href="https://bundlephobia.com/package/webgl-fluid"><img alt="minzipped size" src="https://img.shields.io/bundlephobia/minzip/webgl-fluid"></a>
  <a href="https://npmcharts.com/compare/webgl-fluid"><img alt="npm downloads" src="https://img.shields.io/npm/dt/webgl-fluid?logo=npm&color=rgba(203,0,0,0.9)"></a>
  <a href="https://conventionalcommits.org"><img alt="conventional commits" src="https://img.shields.io/badge/commits-Conventional-FE5196.svg?logo=conventionalcommits"></a>
</p>

<br>

## Features

- Hover to activate by default, can also be Click
- Background image
- Control whether to trigger multiple random splats initially
- Control initial splats count

<br>

## Install

### NPM

```shell
npm i webgl-fluid
```

<a name="CDN"></a>

### CDN + ESM

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
</head>

<body>
  <canvas style="width: 100vw; height: 100vh;" />
  <script type="importmap">
    {
      "imports": {
        "webgl-fluid": "https://cdn.jsdelivr.net/npm/webgl-fluid@0.3/dist/webgl-fluid.mjs"
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

### CDN + IIFE

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
</head>

<body>
  <canvas style="width: 100vw; height: 100vh;" />
  <script src="https://cdn.jsdelivr.net/npm/webgl-fluid@0.3"></script>
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
  SPLAT_COUNT: parseInt(Math.random() * 20) + 5, // Initial splats count (when IMMEDIATE is set to true)
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

## Background Color

Background color will be whitened by `13` on each RGB color values when `options.BLOOM` is `true`.
Set it to `false` to get pure color.

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

### Vanilla JS

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
</head>

<body>
  <canvas style="width: 100vw; height: 100vh;" />
  <script src="src/index.js"></script>
</body>

</html>
```

```ts
// src/index.js

import WebGLFluid from 'webgl-fluid'

WebGLFluid(document.querySelector('canvas'), {
  // options
})
```

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

Detailed changes for each release are documented in the [release notes](https://github.com/cloydlau/webgl-fluid/releases)

<br>
