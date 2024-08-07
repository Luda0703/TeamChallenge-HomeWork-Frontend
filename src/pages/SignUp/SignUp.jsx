import { useState } from "react";
import { NavLink } from "react-router-dom";

import style from "./SignUp.module.css";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [visibleRepeat, setVisibleRepeat] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [error, setError] = useState(false);



  const validateEmail = (email) => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return setError("Invalid Email");
    } else if (regEmail.test(email)) {
      return true;
    }
  };

//   const validatePassword = (password) => {
//     const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
//     if (!regPassword.test(password)) {
//       return setError("Invalid Password");
//     } else if (regPassword.test(password)) {
//       return true;
//     }
//   };

const handleEmailChange = (e) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPassworsStrength(newPassword);
  };

  const handleRepeatePasswordChange = (e) => {
    e.preventDefault();
    const newRepeatPassword = e.target.value;
    setRepeatePassword(newRepeatPassword);
    checkPasswordMatch(newRepeatPassword);
  };

  const toggleShowPassword = () => {
    setVisible(!visible)
  }

  const toggleShowRepeatPassword = () => {
    setVisibleRepeat(!visibleRepeat)
  }

  const checkPasswordMatch = (newRepeatPassword) => {
    setPasswordMatchError(newRepeatPassword !== password)
  }

  const checkPassworsStrength = (newPassword) => {
    const minLength = 6;
    setLengthError(newPassword.length < minLength);

    const isLengthValid = newPassword.length >= minLength;
    const hasLetters = /[a-z]/.test(newPassword);
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword);

    const strength = isLengthValid + hasLetters + hasUpperCase + hasNumber + hasSpecialChars;

    setPasswordStrength(strength);
  }

  const getStrangeColor = () => {
    if(lengthError) {
        return "red"
    } else if(passwordStrength === null) {
        return ""
    } 
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    console.log(repeatePassword)
    // const { email, password } = state;

    // if (validateEmail(email) && validatePassword(password)) {
    //   alert("Connected !");
    // }
  };

  return (
    <div className={style.container}>
      <div className={style.sign_container}>
        <h1 className={style.logo}>дім&Work</h1>
        <p className={style.text}>робота+житло у 2 кліки</p>
        <p className={style.text}>Зручно. Швидко. Ефективно.</p>
        <ul className={style.nav_link}>
          <li className={style.sign_up_text}>Реєстрація</li>
          <li className={style.sign_in_text}>
            <NavLink className={style.sign_in_link} to="/signin">
              Вхід
            </NavLink>
          </li>
        </ul>

        <form 
        onSubmit={handleSubmit}
        >
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
                name='email'
                value={email}
                className={style.input}
                type="email"
                onChange={handleEmailChange}
                placeholder=" "
                required
              />
            </label>
            {/* {validateEmail && (
                <p style={{color: "red"}}>Неправильно введена пошта</p>
            )} */}

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
            </label>

            <label className={style.label}>
              {" "}
              Підтвердіть пароль<span>*</span>
              <input
                value={repeatePassword}
                name="password"
                className={style.input}
                type={visibleRepeat ? "text" : "password"}
                onChange={handleRepeatePasswordChange}
                placeholder=" "
                required
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
            </label>
            <div>
                {lengthError && (
                    <p style={{color: "red"}}>минимум 6 символов</p>
                )}
                {passwordMatchError && (
                    <p style={{color: "red"}}>пароли не совпадают</p>
                )}
                {passwordStrength !== null && !lengthError && (
                    <p style={{color: getStrangeColor}}></p>
                )}
              </div>
          </div>

          <div className={style.checkbox}>
            <input className={style.checkbox_remember} type="checkbox" />
            <p className={style.checkbox_text}> запам’ятати мене </p>
          </div>

          <div className={style.checkbox}>
            <input className={style.checkbox_ok} type="checkbox" />
            <p className={style.checkbox_text}>
              {" "}
              Натискаючи кнопку, ви даєте згоду на обробку своїх персональних
              даних і погоджуєтесь <span>з правилами надання послуг</span> та з
              політикою конфіденційності.{" "}
            </p>
          </div>

          <button className={style.btn_submite} type="submit">
            Зареєструватися
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
