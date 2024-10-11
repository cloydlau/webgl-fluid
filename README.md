<h1 align="center">
  <a href="https://npmjs.com/package/webgl-fluid" target="_blank" rel="noopener noreferrer">
    WebGL Fluid <sup><img alt="version" src="https://img.shields.io/npm/v/webgl-fluid.svg?style=flat-square&color=white&label="></sup>
  </a>
</h1>

<p align="center">
  ESM support for <a href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation">WebGL-Fluid-Simulation</a>.
</p>

<p align="center">
  <a href="https://cloydlau.github.io/playground/webgl-fluid/"><img alt="playground" src="https://img.shields.io/badge/Playground-blue?color=9BE4E0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNiNDAzZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMiA1aDMuNWE1IDUgMCAwIDEgMCAxMEgxMGwtNC4wMTUgNC4yMjdhMi4zIDIuMyAwIDAgMS0zLjkyMy0yLjAzNWwxLjYzNC04LjE3M0E1IDUgMCAwIDEgOC42IDV6Ii8+PHBhdGggZD0ibTE0IDE1bDQuMDcgNC4yODRhMi4zIDIuMyAwIDAgMCAzLjkyNS0yLjAyM2wtMS42LTguMjMyTTggOXYybS0xLTFoMm01IDBoMiIvPjwvZz48L3N2Zz4="></a>
  <br>
  <!-- <a href="https://www.npmjs.com/package/webgl-fluid?activeTab=dependencies"><img alt="zero dependencies" src="https://badgen.net/bundlephobia/dependency-count/webgl-fluid"></a> -->
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fcloydlau%2Fwebgl-fluid?ref=badge_shield&issueType=license" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fcloydlau%2Fwebgl-fluid.svg?type=shield&issueType=license"/></a>
  <a href="https://bundlephobia.com/package/webgl-fluid"><img alt="minzipped size" src="https://img.shields.io/bundlephobia/minzip/webgl-fluid"></a>
  <a href="https://www.jsdelivr.com/package/npm/webgl-fluid"><img alt="jsDelivr downloads" src="https://data.jsdelivr.com/v1/package/npm/webgl-fluid/badge?period=all&style=rounded"></a>
  <a href="https://npmcharts.com/compare/webgl-fluid"><img alt="npm downloads" src="https://img.shields.io/npm/dt/webgl-fluid?logo=npm&color=rgba(203,0,0,0.9)"></a>
  <br>
  <a href="https://www.npmjs.com/package/webgl-fluid?activeTab=versions"><img alt="created at" src="https://img.shields.io/github/created-at/cloydlau/webgl-fluid?&color=1C404E&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik04IDQwaDMyVjI0SDh6Ii8+PHBhdGggc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNCIgZD0iTTQwIDQwSDhtMzIgMEg0aDRtMzIgMGg0bS00IDBWMjRIOHYxNiIvPjxwYXRoIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiIGQ9Im00MCAzNGwtNC0ybC00IDJsLTQtMmwtNCAybC00LTJsLTQgMmwtNC0ybC00IDJtMjQtMTB2LTltLTggOXYtOW0tOCA5di05bTE2LTVWOG0tOCAyVjhtLTggMlY4TTggMjR2MTZtMzItMTZ2MTYiLz48L2c+PC9zdmc+"></a>
  <a href="https://github.com/antfu/eslint-config"><img alt="code style" src="https://antfu.me/badge-code-style.svg"></a>
  <a href="https://conventionalcommits.org"><img alt="conventional commits" src="https://img.shields.io/badge/commits-Conventional-FE5196.svg?logo=conventionalcommits"></a>
  <a href="https://semantic-release.gitbook.io"><img alt="semantic release" src="https://img.shields.io/badge/release-semantic-e10079?logo=semantic-release"></a>
  <a href="https://pr.new"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
</p>

<br>

## Features

- Hover to activate by default, can also be click
- Control whether to generate **configurable number** of random splats at **initialization** and at **intervals**
- Background image

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
