<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl"
//get token from env
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
import layers from "@/assets/layers"
import { text, color } from "@/assets/taipeiTownStyle"
import { building } from "@/assets/building"
export default {
  mounted() {
    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: {
        version: 8,
        sources: {
          composite: {
            url: "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v8",
            type: "vector",
          },
        },
        glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        layers,
      },
      center: [121.56137441007775, 25.042593623591785],
      zoom: 12,
      bearing: 25.405152119092573,
      pitch: 67.49798204204666,
    })
    this.map = map
    this.map.on("load", () => {
      fetch("/taipei_town.geojson")
        .then((response) => response.json())
        .then((data) => {
          this.map
            .addSource("taipei_town", { type: "geojson", data: data })
            .addLayer(building)
            .addLayer(color)
            .addLayer(text)
        })
    })
  },
  unmounted() {
    this.map.remove()
    this.map = null
  },
}
</script>

<style>
.map-container {
  flex: 1;
}
</style>
