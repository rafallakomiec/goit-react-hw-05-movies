import { useEffect, useRef, useState } from 'react';
import Search from '../../components/Search/Search';
import { fetchMovies } from '../../utils/APIHandlers';
import { useSearchParams, Link } from 'react-router-dom';
import css from './Movies.modules.css';

const Movies = () => {
  const submitRef = useRef();

  const { searchQuery, setSearchQuery } = useState('');
  const { isLoading, setIsLoading } = useState(false);
  const { moviesList, setMoviesList } = useState([]);
  const { searchParams, setSearchParams } = useSearchParams();
  const linkQuery = searchParams.get('query');

  useEffect(() => {
    if (!linkQuery) {
      setSearchQuery(linkQuery);
      submitRef?.submit();
    }
  });

  const onSubmitHandler = async event => {
    event.preventDefault();
    if (event.target.search.value === '') {
      alert('Please provide a search phrase!');
      return false;
    }
    setSearchQuery(event.target.search.value);
    setSearchParams(event.target.search.value);
    setIsLoading(true);
    const responseData = await fetchMovies(event.target.search.value);
    const list = responseData.results.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={'/movie/' + movie.id}>{movie.title}</Link>
        </li>
      );
    });
    setMoviesList(list);
    setIsLoading(false);
  };

  return (
    <>
      <Search query={searchQuery} onSubmit={onSubmitHandler} submitRef={submitRef} />
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
