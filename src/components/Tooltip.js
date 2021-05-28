import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PinDropIcon from '@material-ui/icons/PinDrop'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import WcIcon from '@material-ui/icons/Wc'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import WaterFeatureIcon from './WaterFeatureIcon'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Popover from '@material-ui/core/Popover'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  scrollGrid: {
    maxHeight: '20rem',
    overflowY: 'scroll',
    '*::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      width: '7px'
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, .5)',
      '-webkit-box-shadow': '0 0 1px rgba(255, 255, 255, .5)'
    }
  },
  typography: {
    padding: theme.spacing(2)
  }
}))

const Tooltip = ({ feature }) => {
  const classes = useStyles()
  const {
    cool_space_name,
    cs_address1,
    cs_address2,
    cs_postcode,
    opening_hour,
    accessible,
    toilets,
    free_water,
    // water_nearby,
    shaded_well,
    about_shade,
    shade_seating,
    water_feature,
    seating_available,
    tier
  } = feature.properties

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [aboutText, setAboutText] = React.useState(null)

  const handleInfoClick = (event, el) => {
    setAnchorEl(event.currentTarget)
    switch (tier) {
      case 'Tier 1':
        setAboutText(
          'Tier 1: free public access, open 10-5 weekdays and weekends where possible, free drinking water, fully accessible, toilets, shaded seating, water features'
        )
        break
      case 'Tier 2':
        setAboutText(
          'Tier 2: free public access, open at specified times, specified accessibility, drinking water available on site or within walking distance, shaded seating'
        )
        break
      default:
        setAboutText(
          'Tier 3: free public access to outdoor open space, some shade available'
        )
        break
    }
  }

  const handleInfoClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    feature.hasOwnProperty('properties') && (
      <div className={classes.root}>
        {/*Object.entries(feature.properties).reduce(
        (acc, curr) => (
          <div>
            {acc}
            {curr[0]} : {curr[1]}
          </div>
        ),
        ''
      )*/}
        <Typography variant="h4" gutterBottom>
          {cool_space_name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Outdoor - {tier}
          <InfoOutlinedIcon
            style={{ height: 'unset', float: 'right' }}
            onClick={handleInfoClick}
            about={aboutText}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleInfoClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography className={classes.typography}>{aboutText}</Typography>
          </Popover>
        </Typography>

        <Grid container spacing={3} className={classes.scrollGrid}>
          <List dense={true}>
            {cs_address1 && cs_postcode ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <PinDropIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={cs_address1}
                    secondary={
                      (cs_address2 && cs_postcode ? cs_address2 : '') +
                      (cs_address2
                        ? cs_postcode
                          ? ' ' + cs_postcode
                          : ''
                        : cs_postcode
                        ? cs_postcode
                        : '')
                    }
                  />
                </ListItem>
              </Grid>
            ) : null}

            {opening_hour ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText primary={opening_hour} />
                </ListItem>
              </Grid>
            ) : null}
            {accessible ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <AccessibilityNewIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      'Accessible for ' + typeof accessible === 'object'
                        ? JSON.parse(accessible).reduce(
                            (acc, curr) => acc + `, ` + curr
                          )
                        : 'People with disabilities; children; older people; pregnant women; people with underlying health issues'
                    }
                  />
                </ListItem>
              </Grid>
            ) : null}

            {toilets ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <WcIcon />
                  </ListItemIcon>
                  <ListItemText primary={toilets} />
                </ListItem>
              </Grid>
            ) : null}
            {free_water ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <LocalDrinkIcon />
                  </ListItemIcon>
                  <ListItemText primary="Free drinking water" />
                  {/*water_nearby ? water_nearby : ''*/}
                </ListItem>
              </Grid>
            ) : null}
            {shaded_well && about_shade ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <BeachAccessIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      about_shade +
                      (shade_seating ? '. There is also shaded seating' : null)
                    }
                  />
                </ListItem>
              </Grid>
            ) : null}

            {water_feature &&
            !['other', 'No', 'N/A'].includes(water_feature) ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <WaterFeatureIcon />
                  </ListItemIcon>
                  <ListItemText primary={water_feature} />
                </ListItem>
              </Grid>
            ) : null}
            {seating_available ? (
              <Grid item xs>
                <ListItem>
                  <ListItemIcon>
                    <AirlineSeatLegroomExtraIcon />
                  </ListItemIcon>
                  <ListItemText primary="Seating is available" />
                </ListItem>
              </Grid>
            ) : null}
          </List>
        </Grid>
      </div>
    )
  )
}

export default Tooltip
