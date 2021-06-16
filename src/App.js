import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import ReactDOM from 'react-dom'

// import { useFullscreen, useToggle } from 'react-use'

import PropTypes from 'prop-types'

import { mapLayers } from './mapLayers.js'
import { mapAbout } from './mapAbout.js'
import Tooltip from './components/Tooltip'

import { useStyles } from './styles.jsx'

import usePersistedState from './hooks/usePersistedState'
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import useMediaQuery from '@material-ui/core/useMediaQuery'
// import FullscreenIcon from '@material-ui/icons/Fullscreen'
// import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'

import SwitchesGroup from './components/SwitchesGroup'
import { Geocoder } from './components/Geocoder'
import Facilities from './components/Facilities'
import Feedback from './components/Feedback'

import { useTheme } from '@material-ui/core/styles'

import * as Survey from 'survey-react'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZ2xhLWdpcyIsImEiOiJjanBvNGh1bncwOTkzNDNueWt5MGU1ZGtiIn0.XFxLdq2dXttcXSXTiREPTA'

function App({ showBorder = false, onTilesLoad = null }) {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles(theme)

  const ref = useRef(null)
  // const [show, toggle] = useToggle(false)
  // const isFullscreen = useFullscreen(ref, show, {
  //   onClose: () => toggle(false)
  // })

  Survey.StylesManager.applyTheme('bootstrap')

  const surveyJSON = {
    surveyId: 'e5d72f1d-01a7-4894-9d8e-44ee9c52af4e',
    surveyPostId: '82a2ba1b-e580-4034-88f5-f2b3975b1c87'
  }

  const [layers, setLayers] = useState(mapLayers)
  // const [layers, setLayers] = usePersistedState('layers', mapLayers)

  const [legend, setLegend] = useState(null)

  const [drawerOpen, setDrawerOpen] = usePersistedState('drawer', true)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
    setTimeout(function() {
      map && map.resize()
      smallScreen
        ? map.easeTo({
            padding: { bottom: 150, top: 0 },
            duration: 1000
          })
        : map.easeTo({
            padding: { right: 150, left: 0 },
            duration: 1000
          })
    }, 10)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setTimeout(function() {
      map && map.resize()
      smallScreen
        ? map.easeTo({
            padding: { top: 150, bottom: 0 },
            duration: 1000
          })
        : map.easeTo({
            padding: { left: 150, right: 0 },
            duration: 1000
          })
    }, 10)
  }

  const drawerOpened = e => {
    console.log(e, 'opened')
  }

  const MenuButton = ({ bottom }) => {
    return (
      <AppBar
        position={smallScreen ? 'absolute' : 'fixed'}
        style={{
          backgroundColor: 'unset',
          visibility: 'hidden',
          bottom: bottom
        }}
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
    )
  }

  // TABS
  const TabPanel = props => {
    const { children, value, index, ...other } = props

    return (
      // isReady && (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
      // )
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
      'aria-controls': `scrollable-force-tabpanel-${index}`
    }
  }
  const [tabValue, setTabValue] = usePersistedState('tab', 0)

  const tabChange = (event, newValue) => {
    setTabValue(Number(newValue))
  }

  const TabsContent = () => {
    return (
      <Paper square>
        <Tabs
          value={tabValue}
          onChange={tabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable force tabs"
        >
          <Tab label="Layers" {...tabsProps(0)} />
          <Tab label="Find a cool space" {...tabsProps(1)} />
          <Tab label="Feedback" {...tabsProps(2)} />
          <Tab label="Register a cool space" {...tabsProps(3)} />
          <Tab label="About" {...tabsProps(4)} />
        </Tabs>
      </Paper>
    )
  }

  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)
  const tooltipRef = useRef(
    new mapboxgl.Popup({ offset: 5, closeButton: false })
  )

  const [lng, setLng] = usePersistedState('lng', -0.1)
  const [lat, setLat] = usePersistedState('lat', 51.49)
  const [zoom, setZoom] = usePersistedState('zoom', 9)

  // LAYER FILTERS
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
      center: [lng, lat],
      zoom: zoom,
      pitch: 10
    })
    map.touchZoomRotate.disableRotation()

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true
      }),
      'top-left'
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
      map.on('mouseenter', 'boroughdesignatedcoolspaces', e => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'boroughdesignatedcoolspaces', e => {
        map.getCanvas().style.cursor = ''
      })
      // add tooltip when users mouse move over a point
      map.on('click', 'boroughdesignatedcoolspaces', e => {
        const features = map.queryRenderedFeatures(e.point)
        if (
          features.length &&
          Object.values(layers)
            .map(el => el.value)
            .includes(
              features.filter(
                el => el.layer.id === 'boroughdesignatedcoolspaces'
              )[0].sourceLayer
            )
        ) {
          const feature = features.filter(
            el => el.layer.id === 'boroughdesignatedcoolspaces'
          )[0]
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

      map.keyboard.disable()

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

      // useState hook
      setMap(map)
    })

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line

  const gotoLocation = (lng, lat, zoom = 17) => {
    map &&
      map.flyTo({
        center: [lng, lat],
        zoom: zoom,
        speed: 2,
        curve: 1,
        easing(t) {
          return t
        }
      })
  }

  useEffect(() => gotoLocation(lng, lat, zoom), [lng, lat, zoom]) // eslint-disable-line

  return (
    <div ref={ref} className={classes.root}>
      <CssBaseline />
      {!smallScreen && <MenuButton left={smallScreen ? 0 : 'auto'} />}
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
              width: '100%'
              // `${
              //   smallScreen
              //     ? '100%'
              //     : drawerOpen
              //     ? document.querySelector('#root').offsetWidth -
              //       drawerWidth +
              //       'px'
              //     : '100%'
              // }`
            }}
          />
        </div>
      </main>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className={classes.drawer}
        variant="persistent"
        anchor={smallScreen ? 'bottom' : 'right'}
        open={drawerOpen}
        onOpen={drawerOpened}
        onClose={drawerOpened}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {smallScreen ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
          </IconButton>
          <h3 style={{ textAlign: 'center', margin: '0 auto' }}>
            LONDON COOL SPACES
          </h3>{' '}
          {/*<IconButton onClick={toggle}>
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>*/}
        </div>
        <Divider />
        {!smallScreen && <TabsContent />}
        <TabPanel value={tabValue} index={0}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <SwitchesGroup
              layers={layers}
              setLayers={setLayers}
              legend={legend}
            />
            <FormLabel component="legend">
              <p>
                To search for cool spaces in a specific location or near you,
                please go to the{' '}
                <button onClick={() => setTabValue(1)}>
                  <span style={{ fontVariant: 'small-caps' }}>
                    find a cool space
                  </span>{' '}
                </button>{' '}
                tab
              </p>
              <p>
                More information about cool spaces tiers and the sources of data
                for the different layers on the map can be found in the{' '}
                <button onClick={() => setTabValue(4)}>
                  <span style={{ fontVariant: 'small-caps' }}>about</span>
                </button>{' '}
                tab
              </p>
              <p>
                We are still accepting new registrations of indoor and outdoor
                cool spaces. If you would like to register a site please
                complete the form in the{' '}
                <button onClick={() => setTabValue(3)}>
                  <span
                    style={{
                      fontVariant: 'small-caps'
                    }}
                  >
                    register a cool space
                  </span>{' '}
                </button>{' '}
                tab
              </p>
            </FormLabel>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <FormControl component="fieldset" fullWidth={true}>
              <FormLabel component="legend">
                Filter cool spaces by facilities and find a location by search
                or your device position.
              </FormLabel>
              <Facilities map={map} />
              <Geocoder map={map} />
              {/*feature.hasOwnProperty('properties') && (
                <Tooltip feature={feature} />
              )*/}
            </FormControl>
            <FormLabel component="legend">
              To choose what map features to view, please select from the{' '}
              <button onClick={() => setTabValue(0)}>
                <span style={{ fontVariant: 'small-caps' }}>layers</span>
              </button>{' '}
              tab
            </FormLabel>
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Feedback />
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Survey.Survey json={surveyJSON} />
          </div>
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body2" className={classes.typography}>
              {mapAbout}
            </Typography>
          </div>
        </TabPanel>

        {smallScreen && <Divider />}
        {smallScreen && <TabsContent />}
      </SwipeableDrawer>
      {smallScreen && (
        <div style={{ bottom: 0 }}>
          <MenuButton />
        </div>
      )}
    </div>
  )
}
export { MAPBOX_TOKEN, App }
