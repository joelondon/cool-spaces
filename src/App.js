import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import ReactDOM from 'react-dom'

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

// import axios from 'axios'
import PropTypes from 'prop-types'

import { mapLayers } from './mapLayers.js'
import Tooltip from './components/Tooltip'
import AlertDialog from './components/AlertDialog'

// import Autocomplete from '@material-ui/lab/Autocomplete'
// import TextField from '@material-ui/core/TextField'

import { drawerWidth, useStyles } from './styles.jsx'

import usePersistedState from './usePersistedState'
import clsx from 'clsx'

import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import SwitchesGroup from './components/SwitchesGroup'
import Geocoder from './components/Geocoder'
import TimePicker from './components/TimePicker'
import Facilities from './components/Facilities'
import Feedback from './components/Feedback'

import { useTheme } from '@material-ui/core/styles'

import * as Survey from 'survey-react'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZ2xhLWdpcyIsImEiOiJjanBvNGh1bncwOTkzNDNueWt5MGU1ZGtiIn0.XFxLdq2dXttcXSXTiREPTA'

function App({ showBorder = false, onTilesLoad = null }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  Survey.StylesManager.applyTheme('bootstrap')

  const surveyJSON = {
    surveyId: 'e5d72f1d-01a7-4894-9d8e-44ee9c52af4e',
    surveyPostId: '82a2ba1b-e580-4034-88f5-f2b3975b1c87'
  }

  const [isReady, setIsReady] = useState(false)

  const [layers, setLayers] = useState(mapLayers)

  const [legend, setLegend] = useState(null)

  // const gotoLocation = (lng, lat, zoom = 17) => {
  //   map &&
  //     map.flyTo({
  //       center: [lng, lat],
  //       zoom: 14,
  //       speed: 2,
  //       curve: 1,
  //       easing(t) {
  //         return t
  //       }
  //     })
  // }

  const [drawerOpen, setDrawerOpen] = usePersistedState('drawer', true)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
    setTimeout(function() {
      map.resize()
    }, 100)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setTimeout(function() {
      map.resize()
    }, 10)
  }

  // TABS
  const TabPanel = props => {
    const { children, value, index, ...other } = props

    return (
      isReady && (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`scrollable-force-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </div>
      )
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  }

  const tabsProps = index => {
    return {
      id: `scrollable-force-tab-${index}`,
      // 'aria-controls': `full-width-tabpanel-${index}`
      'aria-controls': `scrollable-force-tabpanel-${index}`
    }
  }
  const [tabValue, setTabValue] = usePersistedState('tab', 0)

  const tabChange = (event, newValue) => {
    setTabValue(Number(newValue))
  }

  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)
  const tooltipRef = useRef(
    new mapboxgl.Popup({ offset: 5, closeButton: false })
  )

  const markerDiv = document.createElement('div')
  markerDiv.className = 'tree'
  const markerDivSpan = document.createElement('span')
  const newContent = document.createTextNode('')
  markerDivSpan.appendChild(newContent)
  markerDiv.appendChild(markerDivSpan)

  const markerRef = useRef(
    new mapboxgl.Marker(markerDiv, { anchor: 'top-left' })
  )

  const [lng, setLng] = usePersistedState('lng', -0.1)
  const [lat, setLat] = usePersistedState('lat', 51.49)
  const [zoom, setZoom] = usePersistedState('zoom', 9)

  // try to avoid flash of unstyled content (f.o.u.c)
  useEffect(() => {
    document.fonts.load('18px Lato').then(() => setIsReady(true))
  }, [])

  useEffect(() => {
    if (layers && map) {
      Object.keys(layers).map(el =>
        map
          .getStyle()
          .layers.map(el => el.id)
          .filter(elfilter => elfilter.startsWith(layers[el].value))
          .map(innerel =>
            map.setLayoutProperty(
              innerel,
              'visibility',
              layers[el].showing ? 'visible' : 'none'
            )
          )
      )
    }
  }, [layers, map])

  // MAIN PROGRAM
  useEffect(() => {
    // Initialize map when component mounts
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'cool_spaces.json',
      // style: 'http://3.8.91.221/accessible_green_spaces_web.style.json',
      center: [lng, lat],
      zoom: zoom
    })
    map.touchZoomRotate.disableRotation()
    // Add geolocate control to the map.
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_TOKEN,
      mapboxgl: mapboxgl,
      marker: false,
      collapsed: true,
      countries: 'gb',
      bbox: [-0.489, 51.28, 0.236, 51.686],
      filter: function(item) {
        if (!item.context) {
          return item
        } else {
          return item.context
            .map(function(i) {
              return (
                i.id.split('.').shift() === 'district' &&
                i['text'] === 'Greater London'
              )
            })
            .reduce(function(acc, cur) {
              return acc || cur
            })
        }
      }
    })
    // map.addControl(geocoder, 'top-left')
    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true
    //     },
    //     trackUserLocation: true
    //   }),
    //   'top-left'
    // )
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false, showZoom: true }),
      'bottom-left'
    )

    map.on('load', () => {
      // LEGEND
      setLegend(
        map
          .getStyle()
          .layers.filter(el =>
            // PICK MAP LAYERS THAT MATCH THE LAYERS OBJECT CONTENT
            Object.values(layers)
              .map(el => el.value)
              .includes(el.id)
          )
          .map(el => [el.id, el.paint])
          .map(el => {
            const ret = {}
            ret[el[0]] =
              el[1][Object.keys(el[1]).filter(el => el.includes('color'))[0]]
            return ret
          })
      )
      // add tooltip when users mouse move over a point
      map.on('mousemove', e => {
        const features = map.queryRenderedFeatures(e.point)
        if (
          features.length &&
          Object.values(layers)
            .map(el => el.value)
            .includes(features[0].sourceLayer)
        ) {
          const feature = features[0]
          const tooltipNode = document.createElement('div')
          ReactDOM.render(<Tooltip feature={feature} />, tooltipNode)
          tooltipRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(tooltipNode)
            .addTo(map)
        } else {
          tooltipRef.current.remove()
        }
      })

      // map.on('click', 'trees', e => {
      //   const features = map.queryRenderedFeatures(e.point)
      //   if (features.length) {
      //     const feature = features[0]
      //     layerClick(feature)
      //     createTreeMarker(feature, markerRef, map)
      //   }
      // })

      map.on('moveend', () => {
        const { lng, lat } = map.getCenter()
        const zoom = map.getZoom()
        setLng(lng)
        setLat(lat)
        setZoom(zoom)
      })

      // USED BY THE GEOCODER TO ADD A POINT ON MATCH
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })

      map.addLayer({
        visible: true,
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      })

      geocoder.on('result', function(e) {
        map.getSource('single-point').setData(e.result.geometry)
      })

      // map.loadImage(
      //   'https://farm6.staticflickr.com/5456/9299889586_4ac962ce6e_q_d.jpg',
      //   function(err, image) {
      //     // Throw an error if something went wrong
      //     if (err) throw err
      //
      //     // Declare the image
      //     map.addImage('pattern', image)
      //
      //     // Use the image as a pattern
      //     map.addLayer({
      //       id: 'otherpublicshadedgreenareas_pattern',
      //       type: 'fill',
      //       'source-layer': 'otherpublicshadedgreenareas',
      //       source: {
      //         type: 'vector',
      //         url: 'http://localhost:8080/data/cool-spaces.json'
      //       },
      //       paint: {
      //         'fill-pattern': 'pattern'
      //       }
      //     })
      //   }
      // )

      // map.addLayer({
      //   id: 'accessible_green_spaces_web',
      //   type: 'line',
      //   'source-layer': 'accessible_green_spaces_web',
      //   source: {
      //     type: 'vector',
      //     url: 'https://ldn-gis-mvt.ml/accessible_green_spaces_web.json'
      //   },
      //   paint: {
      //     'line-color': 'white',
      //     'line-width': 10,
      //     'line-blur': 1
      //   }
      // })

      // useState hook
      setMap(map)
    })

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: 'unset', visibility: 'hidden' }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen
        })}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            className={classes.title}
          ></Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(drawerOpen && classes.hide)}
            style={{ visibility: 'visible' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <div className={classes.drawerHeader} />
        <div>
          <div
            ref={mapContainerRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${
                drawerOpen
                  ? document.querySelector('#root').offsetWidth -
                    drawerWidth +
                    'px'
                  : '100%' //document.querySelector('#root').offsetWidth + 'px'
              }`
            }}
          />
        </div>
      </main>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        onOpen={() => console.log('opened')}
        onClose={() => console.log('closed')}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <h3 style={{ textAlign: 'center', margin: '0 auto' }}>
            LONDON COOL SPACES
          </h3>{' '}
          <AlertDialog title="About" text="About text" />
        </div>
        <Divider />
        <Paper square>
          <Tabs
            value={tabValue}
            onChange={tabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable force tabs"
          >
            <Tab label="Filters" {...tabsProps(0)} />
            <Tab label="Layers" {...tabsProps(1)} />
            <Tab label="Feedback" {...tabsProps(2)} />
            <Tab label="Register a cool space" {...tabsProps(3)} />
          </Tabs>
        </Paper>
        <TabPanel value={tabValue} index={0}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Find a cool space</FormLabel>
            <Geocoder />
            <TimePicker />
            <Facilities />
          </FormControl>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <SwitchesGroup
            layers={layers}
            setLayers={setLayers}
            legend={legend}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Feedback />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Survey.Survey json={surveyJSON} />
        </TabPanel>
      </SwipeableDrawer>
    </div>
  )
}
export { MAPBOX_TOKEN, App }
