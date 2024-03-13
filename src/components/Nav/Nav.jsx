import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.navLink}>
        Movies
      </NavLink>
    </>
  );
};

export default Nav;
