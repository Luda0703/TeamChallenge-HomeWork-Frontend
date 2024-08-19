import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import validationSchemaSignUp from "../../schemas/ValidationSchemaSignUpForm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operations";

import style from "./SignUp.module.css";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [visibleRepeat, setVisibleRepeat] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  const toggleShowPassword = () => {
    setVisible(!visible);
  };

  const toggleShowRepeatPassword = () => {
    setVisibleRepeat(!visibleRepeat);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = ( values, { resetForm } ) => {
  
   dispatch(register(values));
   if(rememberMe) {
     localStorage.setItem('userToken', 'your_user_token');
   }

   if(register(values)) {
    navigate('/')
   }

    console.log(values);
    resetForm();
  };

  return (
    <div className={style.container}>
      <div className={style.sign_container}>
        <h1 className={style.logo}>Дім&Work</h1>
        <p className={style.text}>Робота+житло у 2 кліки</p>
        <p className={style.text}>Зручно. Швидко. Ефективно.</p>
        <ul className={style.nav_link}>
          <li className={style.sign_up_text}>Реєстрація</li>
          <li className={style.sign_in_text}>
            <NavLink className={style.sign_in_link} to="/signin">
              Вхід
            </NavLink>
          </li>
        </ul>

        <Formik
          initialValues={{ email: "", password: "", repeatPassword: "" }}
          validationSchema={validationSchemaSignUp}
          onSubmit={onSubmit}
        >
          {({ errors, touched, setFieldTouched, isValid, dirty }) => (
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
                    onInput={(e) => {
                      const value = e.target.value;
                      setInputState((prevState) => ({
                        ...prevState,
                        email: value,
                      }));
                      setFieldTouched("email", true);
                    }}
                  />
                  <ErrorMessage
                    className={`${style.message} ${style.message_error}`}
                    name="email"
                    component="div"
                  />
                  {/* {errors.email && touched.email ? (
                    <div className={style.message_error}></div>
                  ) : inputState.email && !errors.email ? (
                    <div className={style.message_success}>Email is secure</div>
                  ) : null} */}
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
                    onInput={(e) => {
                      const value = e.target.value;
                      setInputState((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                      setFieldTouched("password", true);
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
                  {/* {errors.password && touched.password ? (
                    <div
                      className={`${style.message} ${style.message_error}`}
                    ></div>
                  ) : inputState.password && !errors.password ? (
                    <div
                      className={`${style.message} ${style.message_success}`}
                    >
                      Password is secure
                    </div>
                  ) : null} */}
                </label>

                <label className={style.label}>
                  {" "}
                  Підтвердіть пароль<span>*</span>
                  <Field
                    name="repeatPassword"
                    type={visibleRepeat ? "text" : "password"}
                    placeholder=" "
                    className={`${style.input} ${
                      errors.repeatPassword && touched.repeatPassword
                        ? style.input_error
                        : inputState.repeatPassword && !errors.repeatPassword
                        ? style.input_success
                        : null
                    }`}
                    onInput={(e) => {
                      const value = e.target.value;
                      setInputState((prevState) => ({
                        ...prevState,
                        repeatPassword: value,
                      }));
                      setFieldTouched("repeatPassword", true);
                    }}
                  />
                  <div
                    className={`${style.eye} ${style.eye_open}`}
                    onClick={toggleShowRepeatPassword}
                  >
                    {visibleRepeat ? (
                      <img src="/public/images/eye_open.svg" />
                    ) : (
                      <img src="/public/images/eye.svg" />
                    )}
                  </div>
                  <ErrorMessage
                    className={`${style.message} ${style.message_error}`}
                    name="repeatPassword"
                    component="div"
                  />
                  {/* {errors.repeatPassword && touched.repeatPassword ? (
                    <div
                      className={`${style.message} ${style.message_error}`}
                    ></div>
                  ) : inputState.repeatPassword && !errors.repeatPassword ? (
                    <div
                      className={`${style.message} ${style.message_success}`}
                    >
                      Password is secure
                    </div>
                  ) : null} */}
                </label>
              </div>

                <label className={style.checkbox} >
                <input 
                className={style.checkbox_remember} 
                type="checkbox" 
                checked={rememberMe}
                onChange={handleRememberMe}
                />
                <span className={style.checkbox_text}> запам’ятати мене </span>
                </label>

              <label className={style.checkbox} >
                <input className={style.checkbox_ok} type="checkbox" required />
                <span className={style.checkbox_text}>
                  {" "}
                  Натискаючи кнопку, ви даєте згоду на обробку своїх
                  персональних даних і погоджуєтесь{" "}
                  <a href="#">з правилами надання послуг</a> та з політикою
                  конфіденційності.{" "}
                </span>
              </label>

              <button disabled={!(isValid && dirty)} className={style.btn_submite} type="submit">
                Зареєструватися
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
