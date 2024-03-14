import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Nav from '../components/Nav/Nav';
import css from './SharedLayout.module.css';

const SharedLayout = ({children}) => {
  return (
    <>
      <header className={css.header}>
        <Nav />
      </header>
      <main className={css.main}>
        <Suspense
          fallback={
            <div className={css.fallback}>
              Loading content...
              <br />
              Please wait.
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      <footer className={css.footer}>
        <img src="./src/assets/tmdb.svg" width="200" />
      </footer>
    </>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SharedLayout;
