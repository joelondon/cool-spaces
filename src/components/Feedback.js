import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex'
    }
  }
}))

export default function Feedback() {
  const classes = useStyles()

  const [checked, setChecked] = React.useState(false)

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Email the team</FormLabel>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="standard-basic" label="Your email" />
        <TextField
          multiline
          rowsMax={20}
          required
          id="standard-basic"
          label="Your feedback"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checked"
              color="secondary"
            />
          }
          label="Tick here if you give us permission to email this contact"
        />
        <Button variant="contained">Send</Button>
      </form>
    </FormControl>
  )
}
