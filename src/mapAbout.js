import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdown = `
# About London’s  Cool Spaces

Cool spaces are indoor or outdoor areas where Londoners can take respite on hot days. Cool space sites have been put forward by boroughs, community groups, faith based and other organisations following an  invitation to register process. The cool spaces are categorised by three tiers that can apply to indoor and outdoor spaces:

* Tier 1 spaces have the greatest number of amenities that Londoners can expect from a cool space including access to toilets, free drinking water and full access to disabled persons.
* Tier 2 spaces offer some of the amenities above, but not all. Tier 2 cool spaces still provide good cooling conditions and have the level of accessibility to disabled people clearly stated.
* Tier 3 includes outdoor green and blue spaces which, although not offering the minimum amenities for tiers 1 and 2, provide suitable cooling conditions.

The tiered approach to classifying cool spaces is meant to provide Londoners with a better understanding of what can be expected from spaces and how certain spaces can better fit their needs. More information about cool spaces and the criteria for the different tiers can be found here.

When using London’s parks and green spaces, please remember to [follow guidelines on social distancing](https://www.london.gov.uk/coronavirus/social-distancing-guidance/london-parks-and-green-spaces-covid-19-guidance). Read PHE guidance on [Coping with heat and COVID-19](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/980924/Beat-the-Heat_Leaflet_COVID-19_2021.pdf) and the Mayor’s guidance on [keeping cool on hot days](https://www.london.gov.uk/what-we-do/environment/coping-hot-weather-london).

Data information and credits:

The cool spaces map uses data from the following sources:

* Tree canopy cover: Data from [London Tree Canopy Cover](https://data.london.gov.uk/dataset/curio-canopy)
* Surface temperature map: Data from [ARTi Analytics](https://data.london.gov.uk/dataset/major-summer-heatspots-using-landsat-8-thermal-satellite-data)
* Basemap: Data from [Openstreetmap](https://osm.org), Cartography by [Maptiler](https://maptiler.com/)
`
export const mapAbout = <ReactMarkdown>{markdown}</ReactMarkdown>
