export const text = {
  id: "taipei_town_text",
  source: "taipei_town",
  type: "symbol",
  layout: {
    "text-field": ["to-string", ["get", "TNAME"]],
    "text-size": 13,
  },
  paint: {
    "text-color": "#d5d5d5"
  },
}
export const color = {
  id: "taipei_town_color",
  source: "taipei_town",
  type: "fill",
  layout: {},
  paint: {
    "fill-color": ["get", "color"],
    "fill-opacity": 0.4,
  },
}
