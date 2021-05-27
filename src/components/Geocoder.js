/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import usePersistedState from '../hooks/usePersistedState'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LinearProgress from '@material-ui/core/LinearProgress'

import useDebounce from '../hooks/useDebounce'
import { MAPBOX_TOKEN } from '../App'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export function Geocoder(props) {
  const { map } = props
  const [searchTerm, setSearchTerm] = useState('')
  const [value, setValue] = usePersistedState('searchvalue', '')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLocating, setIsLocating] = useState(false)

  const classes = useStyles()

  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const forwardGeocode = selection => {
    if (selection) {
      setValue(selection)
      let lng, lat, zoom
      const fly = (lng, lat, zoom) => {
        if (map) {
          map.flyTo({
            center: [lng, lat],
            zoom: zoom,
            speed: 2,
            curve: 1,
            easing(t) {
              return t
            }
          })
          map.getSource('single-point').setData({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [lng, lat]
            }
          })
        }
      }
      if (selection && selection.place_name === 'Go to my location') {
        setIsLocating(true)
        const success = position => {
          lng = position.coords.longitude
          lat = position.coords.latitude
          zoom = 17
          setIsLocating(false)
          fly(lng, lat, zoom)
        }
        navigator.geolocation.getCurrentPosition(success)
      } else {
        lng = selection.geometry.coordinates[0]
        lat = selection.geometry.coordinates[1]
        zoom = 14
        fly(lng, lat, zoom)
      }
      map.getSource('single-point').setData({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        }
      })
    }
  }

  // API call
  useEffect(() => {
    const currentLocation = { id: 'search', place_name: 'Go to my location' }
    if (debouncedSearchTerm) {
      setIsSearching(true)
      searchCharacters(debouncedSearchTerm).then(results => {
        setIsSearching(false)
        results.unshift(currentLocation)
        setResults(results)
      })
    } else {
      setResults([currentLocation])
    }
  }, [debouncedSearchTerm])

  const clearSearch = () => {
    setValue('')
    map.getSource('single-point').setData({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      }
    })
  }
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        id="geocoder"
        options={results}
        value={value}
        onInputChange={e => e && setSearchTerm(e.target.value)}
        onChange={(event, selection, reason) =>
          reason === 'clear' ? clearSearch() : forwardGeocode(selection)
        }
        getOptionLabel={option => (option ? option.place_name : '')}
        getOptionSelected={(option, value) => {
          return option.place_name === value.place_name
        }}
        renderInput={params => (
          <TextField {...params} label="Search a location" />
        )}
      />
      {isLocating || isSearching ? <LinearProgress /> : ''}
    </FormControl>
  )

  // API search function
  function searchCharacters(search) {
    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?bbox=-0.489,51.28,0.236,51.686&access_token=${MAPBOX_TOKEN}`
    )
      .then(r => r.json())
      .then(r => r.features)
      .catch(error => {
        console.error(error)
        return []
      })
  }
}
