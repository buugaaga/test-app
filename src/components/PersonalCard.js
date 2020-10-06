import React from 'react'
import {
  makeStyles,
  Card,
  Grid,
  Box,
  Typography,
  Button,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 'auto',
    height: '128px',
    display: 'flex',
    marginTop: theme.spacing(4),
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
  },
  box: {
    justifySelf: 'self-end',
  },
}))
export const PersonalCard = (props) => {
  const { name } = props
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Grid container alignContent="center">
        <Box m={2}>
          <img src="/bigMask.png"></img>
        </Box>
        <Box ml={2} display="flex" alignItems="center">
          <Typography variant="h4">
            {name || 'Иванова Анна Михайловна'}
          </Typography>
        </Box>
        <Box ml="auto" pr={2} display="flex">
          <Button endIcon={<EditIcon color="secondary" />}>
            <Typography variant="body2">РЕДАКТИРОВАТЬ</Typography>
          </Button>
        </Box>
      </Grid>
    </Card>
  )
}
