import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import { ClossedForm } from './ClossedForm'
import { OpenForm } from './OpenForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing(3),
  },
}))

export const Form = (props) => {
  const { email, isForm } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      {isForm ? <OpenForm email={email} /> : <ClossedForm />}
    </Card>
  )
}
