<!-- host -->​
docker cp police_station.geojson postgis:/var/lib/postgresql/data/​

<!-- in postgresql container -->​
apt-get update && apt-get install -y gdal-bin​
psql -d gis -U admin​
CREATE EXTENSION postgis;​
CREATE EXTENSION postgis_topology;​
ALTER DATABASE gis REFRESH COLLATION VERSION;​
exit​
ogr2ogr -f "PostgreSQL" PG:"dbname=gis user=admin password=admin" /var/lib/postgresql/data/police_station.geojson -t_srs epsg:4326 -nln police_station -lco GEOMETRY_NAME=geom​

​