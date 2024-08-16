import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      HOME
      <ul className={style.nav_list}>
        <li>
          <NavLink to="/signup">РЕЄСТРАЦІЯ</NavLink>
        </li>
        <li>
          <NavLink to="/signin">ВХІД</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
