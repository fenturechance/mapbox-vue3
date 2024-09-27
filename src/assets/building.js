export const building = {
  id: "3d-buildings",
  source: "composite",
  "source-layer": "building",
  type: "fill-extrusion",
  minzoom: 14,
  paint: {
    "fill-extrusion-color": "#ddd",
    "fill-extrusion-height": ["number", ["get", "height"], 5],
    "fill-extrusion-base": ["number", ["get", "min_height"], 0],
    "fill-extrusion-opacity": 0.6,
  },
}
