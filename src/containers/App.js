import React from 'react'
import { Container, makeStyles, Grid } from '@material-ui/core'
import background from '../../public/background.svg'
import { Top } from '../components/Top'

const useStyles = makeStyles({
  root: {
    minWidth: '1481px',
    height: '470px',
    backgroundImage: `url(${background})`,
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
