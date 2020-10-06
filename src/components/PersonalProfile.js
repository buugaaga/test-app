import React from 'react'
import { Grid, Typography, Link, Box } from '@material-ui/core'

export const PersonalProfile = (props) => {
  const { title, homePath } = props
  return (
    <Grid item>
      <Grid container>
        <Box display="flex" flexDirection="column">
          <Typography paragraph>
            {(title || 'Личный профиль').toUpperCase()}
          </Typography>
          <Typography variant="body2">
            <Link href={homePath || '#'}>Главная</Link> /{' '}
            {title || 'Личный профиль'}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
