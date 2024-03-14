import { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { fetchMovies } from '../../utils/APIHandlers';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const location = useLocation();

  const [ searchQuery, setSearchQuery ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ moviesList, setMoviesList ] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const linkQuery = searchParams.get('query');

  useEffect(() => {
    if (linkQuery !== null && linkQuery !== searchQuery) {
      setSearchQuery(linkQuery);
    }
  }, [linkQuery, searchQuery]);

  useEffect(() => { 
    (async () => {
      setIsLoading(true);
      const responseData = await fetchMovies(searchQuery);
      const list = responseData.results.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id} state={{ back: location }}>
              {movie.title}
            </Link>
          </li>
        );
      });
      setMoviesList(list);
      setIsLoading(false);
    })();
  }, [searchQuery, location]);

  const onSubmitHandler = async event => {
    event.preventDefault();
    if (event.target.search.value === '') {
      alert('Please provide a search phrase!');
      return false;
    }
    setSearchQuery(event.target.search.value);
    setSearchParams({ query: event.target.search.value });
  };

  return (
    <>
      <Search query={searchQuery} onSubmit={onSubmitHandler} />
      {isLoading && (
        <div className={css.fallback}>
          Loading content...
          <br />
          Please wait.
        </div>
      )}
      {!isLoading && <ul className={css.list}>{moviesList}</ul>}
    </>
  );
};

export default Movies;
