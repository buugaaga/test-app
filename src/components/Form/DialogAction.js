import React, { useState } from 'react'
import {
  makeStyles,
  Grid,
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  CircularProgress,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  // TODO: make the custom button and to use it
  button: {
    color: 'white',
    backgroundColor: '#00BFA5',
    '&:hover': {
      backgroundColor: '#009FA5',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
  },
}))

/**
 * @summary Диалоговое окно для подтверждения действий пользователя.
 * @param children - Элемент, нажатие на который спровоцирует появление
 * диалогового окна.
 * @param onClick - Коллбэк, который сработает при нажатии на кнопку подтверждения действия.
 */
export const DialogAction = (props) => {
  const { children, onClick } = props

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSave, setIsSave] = useState(false)

  const classes = useStyles()
  const clone = React.cloneElement(children, {
    onClick: () => setOpen(true),
  })

  const handleClick = async () => {
    setIsLoading(true)
    try {
      await onClick()
      setIsSave(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {clone}
      <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
        <Backdrop open={isLoading} className={classes.backdrop}>
          <CircularProgress />
        </Backdrop>

        <DialogContent>
          <Typography variant="subtitle2">
            {isSave ? 'Данные успешно сохранены' : 'Сохранить изменения?'}
          </Typography>
        </DialogContent>

        <DialogActions>
          <Grid container>
            {isSave ? (
              <Grid item xs={12}>
                <Button
                  onClick={() => setOpen(false)}
                  variant="contained"
                  className={classes.button}
                >
                  хорошо
                </Button>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} container justify="center">
                  <Button
                    className={classes.button}
                    onClick={handleClick}
                    variant="contained"
                    color="secondary"
                  >
                    Сохранить
                  </Button>
                </Grid>
                <Grid item xs={12} container justify="center">
                  <Button
                    onClick={() => setOpen(false)}
                    variant="outlined"
                  >
                    не сохранять
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  )
}
