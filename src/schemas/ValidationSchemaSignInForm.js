import * as Yup from 'yup';

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string()
    .email('електронна адреса має бути дійсною')
    .test('has-dot', 'Електронна адреса має містити крапку (.)', value => {
      return value.includes('@') && value.split('@')[1].includes('.');
    })
    .required('Поле електронної пошти є обов’язковим для заповнення'),
  password: Yup.string().required('Введіть дійсний пароль'),
});

export default validationSchemaSignIn;