import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchemaSignIn from '../../schemas/ValidationSchemaSignInForm';
import style from "./SignIn.module.css";
import { useDispatch } from 'react-redux';
import { logIn } from "../../redux/auth/operations";

const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });

  const toggleShowPassword = () => {
    setVisible(!visible);
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = ( values, { resetForm } ) => {
    dispatch(logIn(values));
    if(logIn(values)) {
      navigate('./')
    }
    console.log(values);
    resetForm();
  };

  return (
    <div className={style.container}>
      <div className={style.sign_container}>
        <h1 className={style.logo}>дім&Work</h1>
        <p className={style.text}>робота+житло у 2 кліки</p>
        <p className={style.text}>Зручно. Швидко. Ефективно.</p>
        <ul className={style.nav_link}>
          <li className={style.sign_up_text}>
            <NavLink className={style.sign_in_link} to="/signup">
              Реєстрація
            </NavLink>
          </li>
          <li className={style.sign_in_text}>Вхід</li>
        </ul>
        
        <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchemaSignIn}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldTouched }) => (
        <Form autoComplete="off">
          <div className={style.social_media}>
            <button className={style.btn_google}>
              <img src="/public/images/google.svg" alt="google" />
              Продовжити з Google
            </button>
            <button className={style.btn_apple}>
              <img src="/public/images/apple.svg" alt="apple" />
            </button>
            <button className={style.btn_facebook}>
              <img src="/public/images/facebook.svg" alt="facebook" />
            </button>
          </div>
          <p className={style.text_or}>або</p>

          <div className={style.contsiner_input}>
            <label className={style.label}>
              {" "}
              Введіть email <span>*</span>
              <Field
                name="email"
                type="email"
                placeholder=" "
                className={`${style.input} ${
                    errors.email && touched.email
                      ? style.input_error
                      : inputState.email && !errors.email
                      ? style.input_success
                      : null
                  }`}
                  onInput={e => {
                    const value = e.target.value;
                    setInputState(prevState => ({
                      ...prevState,
                      email: value,
                    }));
                    setFieldTouched('email', true); 
                  }}
              />
              <ErrorMessage
              className={`${style.message} ${style.message_error}`}
              name="email"
              component="div"
            />
            </label>

            <label className={style.label}>
              {" "}
              Пароль <span>*</span>
              <Field
                name="password"
                type={visible ? "text" : "password"}
                placeholder=" "
                className={`${style.input} ${
                    errors.password && touched.password
                      ? style.input_error
                      : inputState.password && !errors.password
                      ? style.input_success
                      : null
                  }`}
                  onInput={e => {
                    const value = e.target.value;
                    setInputState(prevState => ({
                      ...prevState,
                      password: value,
                    }));
                    setFieldTouched('password', true); 
                  }}
              />
              <div
                className={`${style.eye} ${style.eye_open}`}
                onClick={toggleShowPassword}
              >
                {visible ? (
                  <img src="/public/images/eye_open.svg" />
                ) : (
                  <img src="/public/images/eye.svg" />
                )}
              </div>
              <ErrorMessage
              className={`${style.message} ${style.message_error}`}
              name="password"
              component="div"
            />
              <a href="#">Забули пароль?</a>
            </label>
            {/* <div className={styles.Text_about_password}>
            <Link to={'/forgotyourpassword'}>Forgot your password?</Link>
          </div> */}
          </div>

          <div className={style.checkbox}>
            <input className={style.checkbox_remember} type="checkbox" />
            <p className={style.checkbox_text}> запам’ятати мене </p>
          </div>

          <button className={style.btn_submite} type="submit">
            Увійти
          </button>
        </Form>
        )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
