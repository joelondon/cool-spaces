/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
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

const handleNavi = () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
  })
}

export default function Geocoder() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  // is there a pending API request
  const [isSearching, setIsSearching] = useState(false)

  const classes = useStyles()

  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // API call
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      searchCharacters(debouncedSearchTerm).then(results => {
        setIsSearching(false)
        results.unshift({ id: 'search', place_name: 'Current location' })
        setResults(results)
      })
    } else {
      setResults([{ id: 'search', place_name: 'Current location' }])
      // setResults([{ id: 'search', place_name: 'Current location' }])
    }
  }, [debouncedSearchTerm])

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        id="geocoder"
        options={results}
        onInputChange={e => setSearchTerm(e.target.value)}
        // onHighlightChange={e => console.log(e)}
        // getOptionSelected={o => console.log(o)}
        getOptionLabel={option => option.place_name}
        renderInput={params => <TextField {...params} label="Where" />}
      />
    </FormControl>
  )

  // API search function
  function searchCharacters(search) {
    return fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${MAPBOX_TOKEN}`
    )
      .then(r => r.json())
      .then(r => r.features)
      .catch(error => {
        console.error(error)
        return []
      })
  }
}
