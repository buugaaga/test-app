import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const schema = yup.object().shape({
  fullName: yup.string().max(40),
  email: yup.string().email('Пожалуйста, введите вашу почту'),
  tel: yup
    .string()
    .matches(
      phoneRegExp,
      'Пожалуйста, введите правильный номер телефона'
    ).max(12, 'не более 12 цифр'),
})
