## env_cs_average_summer_temperature_city_block

gla_gis> \d env_cs_average_summer_temperature_city_block

<pre>
+-------------------+------------------------+-------------+
| Column            | Type                   | Modifiers   |
|-------------------+------------------------+-------------|
| objectid          | integer                |  not null   |
| class_2018        | character varying(150) |             |
| avglst            | numeric(38,8)          |             |
| std_avglst        | numeric(38,8)          |             |
| min_avglst        | numeric(38,8)          |             |
| max_avglst        | numeric(38,8)          |             |
| gdb_geomattr_data | bytea                  |             |
| shape             | geometry               |             |
+-------------------+------------------------+-------------+
</pre>

ogr2ogr -t_srs "EPSG:4326" -f GeoJSON -lco COORDINATE_PRECISION=5 avg-summer-temp-city-block.geojson "PG:host=3.11.224.244 dbname=gla_gis user=gisapdata password=gi\$own" -sql "select avglst, std_avglst, min_avglst, max_avglst, shape as geom FROM env_cs_average_summer_temperature_city_block"

## user stories

as a council member of staff
i want bulk registration
so that i can register multiple sites at once

as a gla member of staff
i want to provide info for residents to access cool spaces during a heatwave
so that the population can be protected

as a member of the public
i want to have an easy to access information
so that i can access cool space

as a bloomberg consultant
i want to share gis intelligence (e.g. canopy cover, min/max temp)
so that i can help the gla to deliver the service
based on working on this in other cities

as a gla member of staff
i want to allocate registered cool spaces to tiers one, two and three
so that their utility can be assessed by the public

as someone with local knowledge
i want to be able to nominate a potential site
so that it can be considered by the steering group

as a member of gla gis team
i want to compile all the relevant data
so that i can map and label this

## tippecanoe

```sh
tippecanoe \
 -o cool-spaces.mbtiles \
 --force \
 --maximum-zoom=16 \
 --minimum-zoom=9 \
 -r1 \
 --drop-densest-as-needed \
 --detect-shared-borders water-fountains.geojson watercourses.geojson borough-designated-cool-spaces.geojson other-public-shaded-green-areas.geojson
 ```
