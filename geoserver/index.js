const fs = require("fs")
const proj4 = require("proj4")

// 定义坐标系
const EPSG4326 = "EPSG:4326"
const EPSG3857 = "EPSG:3857"

// 读取 GeoJSON 文件
const inputFilePath = "police_station_4326.geojson" // 输入文件路径
const outputFilePath = "police_station_3857.geojson" // 输出文件路径

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err)
    return
  }

  try {
    // 解析 GeoJSON
    const geojson = JSON.parse(data)

    // 转换坐标
    const convertedFeatures = geojson.features.map((feature) => {
      const coords = feature.geometry.coordinates
      const convertedCoords = proj4(EPSG4326, EPSG3857, coords)
      return {
        ...feature,
        geometry: {
          ...feature.geometry,
          coordinates: convertedCoords,
        },
      }
    })

    // 创建新的 GeoJSON
    const convertedGeoJSON = {
      type: geojson.type,
      features: convertedFeatures,
    }

    // 写入新文件
    fs.writeFile(
      outputFilePath,
      JSON.stringify(convertedGeoJSON, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing the file:", err)
        } else {
          console.log("GeoJSON converted and saved to", outputFilePath)
        }
      }
    )
  } catch (error) {
    console.error("Error parsing GeoJSON:", error)
  }
})
