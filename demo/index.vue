<template>
  <canvas ref="canvas"/>
</template>

<script>
import WebglFluid from '../src/index'

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
