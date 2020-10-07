import React, { useState } from 'react'
import { Container, makeStyles, Grid } from '@material-ui/core'
import background from '../icons/background.svg'
import { Top } from '../components/Top'
import { PersonalProfile } from '../components/PersonalProfile'
import { PersonalCard } from '../components/PersonalCard'
import { Form } from '../components/Form'

const useStyles = makeStyles({
  root: {
    height: '470px',
    width: '100%',
    minWidth: '1081px',

    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
})

export const App = () => {
  const [isForm, setIsForm] = useState(false)
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container direction="column">
        <Top />
        <PersonalProfile />
        <PersonalCard isForm={isForm} setIsForm={setIsForm} />
        <Form isForm={isForm} />
      </Grid>
    </Container>
  )
}
