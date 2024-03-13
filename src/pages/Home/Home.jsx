import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../../utils/APIHandlers';
import css from './Home.module.css';

const Home = () => {
  const { isLoading, setIsLoading } = useState(true);
  const { top20, setTop20 } = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const responseData = await fetchTrending();
      const list = responseData.results.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={'/movie/' + movie.id} state={{ back: location }}>{movie.title}</Link>
          </li>
        );
      });
      setTop20(list);
      setIsLoading(false);
    })();
  });

  return (
    <>
      {isLoading && (
        <div className={css.fallback}>
          Loading content...
          <br />
          Please wait.
        </div>
      )}
      {!isLoading && (
        <>
          <h1 className={css.subtitle}>Trending today</h1>
          <ul className={css.list}>{top20}</ul>
        </>
      )}
    </>
  );
};

export default Home;
