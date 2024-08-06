import {useState} from 'react';
import { NavLink } from 'react-router-dom';

import style from './SignUp.module.css';

const SignUp = () => {
    const [visible, setVisible] = useState(false);

    return ( 
        <div className={style.container}>
            <div className={style.sign_container}>
                <h1 className={style.logo}>дім&Work</h1>
                <p className={style.text}>робота+житло у 2 кліки</p>
                <p className={style.text}>Зручно. Швидко. Ефективно.</p>
                <ul className={style.nav_link}>
                    <li className={style.sign_up_text}>
                    Реєстрація
                    </li>
                    <li className={style.sign_in_text}>
                    <NavLink className={style.sign_in_link} to="/signin">Вхід</NavLink>
                    </li>
                </ul>
                <form>
                    <div className={style.social_media}>
                        <button className={style.btn_google}>
                            <img src='/public/images/google.svg' alt="google"/>
                            Продовжити з Google</button>
                        <button className={style.btn_apple}>
                        <img src='/public/images/apple.svg' alt="apple"/>
                        </button>
                        <button className={style.btn_facebook}>
                        <img src='/public/images/facebook.svg' alt="facebook"/>
                        </button>
                    </div>
                    <p className={style.text_or}>або</p>
                    
                    <div className={style.contsiner_input}>
                    <label className={style.label}> Введіть email <span>*</span>
                    <input className={style.input} type="email"/>
                    </label>
                    
                    <label className={style.label}> Пароль <span>*</span>
                        <input className={style.input}  type={visible ? 'text' : 'password'}/>
                    </label>

                    <label className={style.label}> Підтвердіть пароль<span>*</span>
                        <input className={style.input}  type={visible ? 'text' : 'password'}/>
                    </label>

                    </div>

                    <div className={style.checkbox}>    
                        <input className={style.checkbox_remember} type='checkbox'/>
                        <p className={style.checkbox_text}> запам’ятати мене </p> 
                    </div>

                    <div className={style.checkbox}>    
                        <input className={style.checkbox_ok} type='checkbox'/>
                        <p className={style.checkbox_text}> Натискаючи кнопку, ви даєте згоду на обробку своїх персональних даних і погоджуєтесь <span>з правилами надання послуг</span> та з політикою конфіденційності. </p> 
                    </div>

                    <button className={style.btn_submite} type='submite'>Зареєструватися</button>

                </form>
            </div>

        </div>
     );
}
 
export default SignUp;