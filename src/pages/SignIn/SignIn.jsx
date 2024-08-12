import { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./SignIn.module.css";

const SignIn = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return setError("Invalid Email");
    } else if (regEmail.test(email)) {
      return true;
    }
  };

  const validatePassword = (password) => {
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    if (!regPassword.test(password)) {
      return setError("Invalid Password");
    } else if (regPassword.test(password)) {
      return true;
    }
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(email);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(password);
  };

  const toggleShowPassword = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
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

        <form onSubmit={handleSubmit}>
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
              <input
                name="email"
                value={email}
                className={style.input}
                type="email"
                onChange={handleEmailChange}
                placeholder=" "
                required
              />
            </label>

            <label className={style.label}>
              {" "}
              Пароль <span>*</span>
              <input
                name="password"
                value={password}
                className={style.input}
                type={visible ? "text" : "password"}
                onChange={handlePasswordChange}
                placeholder=" "
                required
                minLength="6"
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
              <a href="#">Забули пароль?</a>
            </label>
          </div>

          <div className={style.checkbox}>
            <input className={style.checkbox_remember} type="checkbox" />
            <p className={style.checkbox_text}> запам’ятати мене </p>
          </div>

          <button className={style.btn_submite} type="submit">
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
