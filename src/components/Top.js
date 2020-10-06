import React from 'react'
import { SvgIcon, Grid, makeStyles, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: '30px',
    width: '100%',
  },
})

export const Top = (props) => {
  const { name } = props
  const classes = useStyles()
  return (
    <Grid item className={classes.root}>
      <Grid container justify="flex-end">
        <Box m={2} alignItems="center" display="flex">
          <SvgIcon width="24" height="30" viewBox="0 0 24 30">
            <path
              d="M12 30C13.65 30 15 28.65 15 27H9C9 28.65 10.35 30 12 30ZM21 21V13.5C21 8.895 18.555 5.04 14.25 4.02V3C14.25 1.755 13.245 0.75 12 0.75C10.755 0.75 9.75 1.755 9.75 3V4.02C5.46 5.04 3 8.88 3 13.5V21L0 24V25.5H24V24L21 21ZM18 22.5H6V13.5C6 9.78 8.265 6.75 12 6.75C15.735 6.75 18 9.78 18 13.5V22.5Z"
              fill="white"
            />
            />
          </SvgIcon>
        </Box>
        <Box m={2} alignItems="center" display="flex">
          <SvgIcon width="1" height="39" viewBox="0 0 1 39">
            <line
              x1="0.5"
              y1="2.18557e-08"
              x2="0.499998"
              y2="39"
              stroke="white"
            />
            />
          </SvgIcon>
        </Box>
        <Box m={2} alignItems="center" display="flex">
          <img src="/mask.png" style={{ width: '40px', height: '40px' }} />
        </Box>
        <Box m={2} alignItems="center" display="flex">
          <Typography variant="body2">{name || 'Иванова А.'}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
