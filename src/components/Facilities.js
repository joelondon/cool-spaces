/* eslint-disable no-use-before-define */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export default function Facilities() {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        multiple
        id="facilities"
        options={options}
        getOptionLabel={option => option.title}
        renderInput={params => <TextField {...params} label="Facilities" />}
      />
    </FormControl>
  )
}

const options = [
  { title: 'Water', value: 'water' },
  { title: 'Seating', value: 'seating' },
  { title: 'Managed site', value: 'managed site' },
  { title: 'Indoor', value: 'indoor' },
  { title: 'Outdoor', value: 'outdoor' },
  { title: 'Toilets', value: 'toilets' }
]
