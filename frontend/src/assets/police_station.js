function createUrlWithParams(baseUrl, params) {
  const url = new URL(baseUrl)
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key])
  })
  return url.toString()
}
const baseUrl = `${window.location.origin}/geoserver/ne/wms`
const params = {
  bbox: "{bbox-epsg-3857}",
  format: "image/png",
  service: "WMS",
  version: "1.1.1",
  request: "GetMap",
  srs: "EPSG:3857",
  transparent: true,
  width: 256,
  height: 256,
  layers: "police_station",
  execptions: "application/vnd.ogc.se_inimage",
}

const resultUrl = decodeURIComponent(createUrlWithParams(baseUrl, params))

export const police_station = {
  type: "raster",
  tiles: [resultUrl],
  tileSize: 256,
}

export const police_station_layer = {
  id: "police_station_layer",
  type: "raster",
  source: "police_station",
  paint: {},
}
