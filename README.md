<h1 align="center">
  <a href="https://npmjs.com/package/webgl-fluid" target="_blank" rel="noopener noreferrer">
    WebGL Fluid <sup><img alt="version" src="https://img.shields.io/npm/v/webgl-fluid.svg?style=flat-square&color=white&label="></sup>
  </a>
</h1>

<p align="center">
  ESM support for <a href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation">WebGL-Fluid-Simulation</a>.
</p>

<p align="center">
  <a href="https://cloydlau.github.io/demo/webgl-fluid.html"><img alt="playground" src="https://img.shields.io/badge/Playground-blue?color=9BE4E0"></a>
  <br>
  <a href="https://conventionalcommits.org"><img alt="conventional commits" src="https://img.shields.io/badge/commits-Conventional-FE5196.svg?logo=conventionalcommits"></a>
  <a href="https://github.com/antfu/eslint-config"><img alt="code style" src="https://antfu.me/badge-code-style.svg"></a>
  <br>
  <a href="https://www.npmjs.com/package/webgl-fluid?activeTab=dependencies"><img alt="zero dependencies" src="https://badgen.net/bundlephobia/dependency-count/webgl-fluid"></a>
  <a href="https://bundlephobia.com/package/webgl-fluid"><img alt="minzipped size" src="https://img.shields.io/bundlephobia/minzip/webgl-fluid"></a>
  <a href="https://npmcharts.com/compare/webgl-fluid"><img alt="npm downloads" src="https://img.shields.io/npm/dt/webgl-fluid?logo=npm&color=rgba(203,0,0,0.9)"></a>
</p>

<br>

## Features

- 👆 Hover to activate by default, can also be click
- ✨ Control whether to generate **configurable number** of random splats at **initialization** and at **intervals**
- 🖼️ Background image

<br>

## Install

### NPM

```shell
npm i webgl-fluid
```

### CDN + ESM

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <canvas style="width: 100vw; height: 100vh" />
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
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <canvas style="width: 100vw; height: 100vh" />
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
  TRIGGER: 'hover',
  IMMEDIATE: true,
  AUTO: false,
  INTERVAL: 3000,
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
  SPLAT_COUNT: Number.parseInt(Math.random() * 20) + 5,
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

## Trigger Mode

```ts
WebGLFluid(document.querySelector('canvas'), {
  TRIGGER: 'hover', // Can be change to 'click'
})
```

<br>

## Auto Splating at Initialization

```ts
WebGLFluid(document.querySelector('canvas'), {
  IMMEDIATE: true,
})
```

<br>

## Auto Splating at Intervals

```ts
WebGLFluid(document.querySelector('canvas'), {
  AUTO: true, // Whether to enable auto-splating
  INTERVAL: 3000, // The time (in milliseconds) the timer should delay in between auto-splating
})
```

<br>

## Set the Splats' Count

```ts
WebGLFluid(document.querySelector('canvas'), {
  SPLAT_COUNT: Number.parseInt(Math.random() * 20) + 5,
})
```

<br>

## Background Image

CSS

```css
canvas {
  width: 100vw;
  height: 100vh;
  background-image: url('xxx.png');
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

## Background Color

Background color will be whitened by `13` on each RGB color values when `options.BLOOM` is `true`.
Set it to `false` to get pure color.

<br>

## Example

### Vue 3

```vue
<script setup>
import { onMounted, ref } from 'vue'
import WebGLFluid from 'webgl-fluid'

const canvas = ref()

onMounted(() => {
  WebGLFluid(canvas.value)
})
</script>

<template>
  <canvas ref="canvas" />
</template>

<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
```

### Vue 2

```vue
<script>
import WebGLFluid from 'webgl-fluid'

export default {
  mounted() {
    WebGLFluid(this.$refs.canvas)
  }
}
</script>

<template>
  <canvas ref="canvas" />
</template>

<style>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>
```

### Vanilla JS or Any Other Framework

```html
<!-- index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
    <canvas style="width: 100vw; height: 100vh" />
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

<br>

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/cloydlau/webgl-fluid/releases)

<br>
