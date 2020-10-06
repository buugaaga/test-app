import React from 'react'
import { Container, makeStyles, Grid } from '@material-ui/core'
import background from '../icons/background.svg'
import { Top } from '../components/Top'

const useStyles = makeStyles({
  root: {
    height: '470px',
    width: '1481px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
})


export const App = () => {
  const classes = useStyles();
  return (
  <Container className={classes.root}>
    <Grid container direction='column'>
      <Top />
    </Grid>
  </Container>)
}
