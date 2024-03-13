import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <Nav />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <img src='../assets/tmdb.svg' width='200' />
      </footer>
    </>
  );
};

export default SharedLayout;
