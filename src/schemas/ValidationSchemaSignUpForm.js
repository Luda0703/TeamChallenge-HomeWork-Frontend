import * as Yup from 'yup';

const validationSchemaSignUp = Yup.object().shape({
email: Yup.string()
  .email('електронна адреса має бути дійсною')
  .test('has-dot', 'Електронна адреса має містити крапку (.)', value => {
    return value.includes('@') && value.split('@')[1].includes('.');
  })
  .required('Поле електронної пошти є обов’язковим для заповнення'),
password: Yup.string()
  .min(6, 'Пароль має бути не менше 6 символів')
  .max(16, 'Пароль може містити не більше 16 символів')
  .matches(/[A-Z]/, 'Пароль має містити принаймні одну велику літеру')
  .matches(/[a-z]/, 'Пароль має містити принаймні одну малу літеру')
  .matches(/[0-9]/, 'Пароль має містити хоча б одну цифру')
  .required('Введіть дійсний пароль'),
repeatPassword: Yup.string()
.oneOf([Yup.ref('password'), null], 'Паролі мають збігатися')
  .required('Введіть дійсний пароль'),
});

export default validationSchemaSignUp;