import React from 'react'
import axios from 'axios'
import {
  CardContent,
  Grid,
  SvgIcon,
  Box,
  Button,
  makeStyles,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useLocalStorage } from '../../hooks'
import { schema } from './validator'
import { DialogAction } from './DialogAction'

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'white',
    backgroundColor: '#00BFA5',
    '&:hover': {
      backgroundColor: '#009FA5',
    }, // желательно не использовать кастомные цвета а делать через theme
  },
}))

export const OpenForm = (props) => {
  const classes = useStyles()
  const [person, setPerson] = useLocalStorage('testApp', [])
  return (
    <CardContent>
      <Formik
        onSubmit={async (values) => {
          console.log(values)
          await setPerson(values)
          await axios.post('/api/hello', values)
        }}
        initialValues={{
          fullName: '',
          email: '',
          tel: '',
        }}
        validationSchema={schema}
      >
        {({ submitForm}) => (
          <Form>
            <Grid container spacing={2}>
              <Box alignSelf="center">
                <SvgIcon width="36" height="36" viewBox="0 0 36 36">
                  <path
                    d="M28.5 4.49994H22.23C21.6 2.75994 19.95 1.49994 18 1.49994C16.05 1.49994 14.4 2.75994 13.77 4.49994H7.5C5.85 4.49994 4.5 5.84994 4.5 7.49994V28.4999C4.5 30.1499 5.85 31.4999 7.5 31.4999H28.5C30.15 31.4999 31.5 30.1499 31.5 28.4999V7.49994C31.5 5.84994 30.15 4.49994 28.5 4.49994ZM18 4.49994C18.825 4.49994 19.5 5.17494 19.5 5.99994C19.5 6.82494 18.825 7.49994 18 7.49994C17.175 7.49994 16.5 6.82494 16.5 5.99994C16.5 5.17494 17.175 4.49994 18 4.49994ZM18 10.4999C20.49 10.4999 22.5 12.5099 22.5 14.9999C22.5 17.4899 20.49 19.4999 18 19.4999C15.51 19.4999 13.5 17.4899 13.5 14.9999C13.5 12.5099 15.51 10.4999 18 10.4999ZM27 28.4999H9V26.3999C9 23.3999 15 21.7499 18 21.7499C21 21.7499 27 23.3999 27 26.3999V28.4999Z"
                    fill="#00BFA5"
                  />
                </SvgIcon>
              </Box>

              <Grid item>
                <Box width="300px">
                  <Field
                    fullWidth
                    name="fullName"
                    component={TextField}
                    variant="outlined"
                    label="Фамилия и имя"
                    placeholder="Укажите ваши фамилию и имя"
                  />
                </Box>
              </Grid>
              <Box />
              <Box alignSelf="center">
                <SvgIcon width="36" height="36" viewBox="0 0 36 36">
                  <path
                    d="M18 3.00006C9.72 3.00006 3 9.72006 3 18.0001C3 26.2801 9.72 33.0001 18 33.0001H25.5V30.0001H18C11.49 30.0001 6 24.5101 6 18.0001C6 11.4901 11.49 6.00006 18 6.00006C24.51 6.00006 30 11.4901 30 18.0001V20.1451C30 21.3301 28.935 22.5001 27.75 22.5001C26.565 22.5001 25.5 21.3301 25.5 20.1451V18.0001C25.5 13.8601 22.14 10.5001 18 10.5001C13.86 10.5001 10.5 13.8601 10.5 18.0001C10.5 22.1401 13.86 25.5001 18 25.5001C20.07 25.5001 21.96 24.6601 23.31 23.2951C24.285 24.6301 25.965 25.5001 27.75 25.5001C30.705 25.5001 33 23.1001 33 20.1451V18.0001C33 9.72006 26.28 3.00006 18 3.00006ZM18 22.5001C15.51 22.5001 13.5 20.4901 13.5 18.0001C13.5 15.5101 15.51 13.5001 18 13.5001C20.49 13.5001 22.5 15.5101 22.5 18.0001C22.5 20.4901 20.49 22.5001 18 22.5001Z"
                    fill="#00BFA5"
                  />
                </SvgIcon>
              </Box>

              <Grid item>
                <Box width="300px">
                  <Field
                    fullWidth
                    name="email"
                    component={TextField}
                    variant="outlined"
                    label="E-mail"
                    placeholder="Ivanova@mail.ru"
                  />
                </Box>
              </Grid>
              <Box alignSelf="center">
                <SvgIcon width="36" height="36" viewBox="0 0 36 36">
                  <path
                    d="M30.015 23.07C28.17 23.07 26.385 22.77 24.72 22.23C24.195 22.05 23.61 22.185 23.205 22.59L20.85 25.545C16.605 23.52 12.63 19.695 10.515 15.3L13.44 12.81C13.845 12.39 13.965 11.805 13.8 11.28C13.245 9.615 12.96 7.83 12.96 5.985C12.96 5.175 12.285 4.5 11.475 4.5H6.285C5.475 4.5 4.5 4.86 4.5 5.985C4.5 19.92 16.095 31.5 30.015 31.5C31.08 31.5 31.5 30.555 31.5 29.73V24.555C31.5 23.745 30.825 23.07 30.015 23.07Z"
                    fill="#00BFA5"
                  />
                </SvgIcon>
              </Box>

              <Grid item>
                <Box width="300px">
                  <Field
                    fullWidth
                    name="tel"
                    component={TextField}
                    variant="outlined"
                    label="Номер телефона"
                    placeholder="Укажите номер телефона"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} container justify="center">
                <DialogAction onClick={submitForm}>
                  <Button
                    size="large"
                    variant="contained"
                    className={classes.button}
                  >
                    Сохранить изменения
                  </Button>
                </DialogAction>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </CardContent>
  )
}
