import PropTypes from 'prop-types';
import { Suspense, useEffect, useState, lazy } from 'react';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import { fetchMovie } from '../../utils/APIHandlers';

const Cast = lazy(() => import('../MovieCast/MovieCast'));
const Reviews = lazy(() => import('../MovieReviews/MovieReviews'));

const MovieDesc = ({ id }) => {
    const { movie, setMovie } = useState({});
    const { isLoading, setIsLoading } = useState(true);
    
    useEffect(() => {
        (async () => {
            const responseData = await fetchMovie(id);
            const { title, poster_path, vote_average, overview, genres } = responseData;
            setMovie(
              <>
                <img src={'https://image.tmdb.org/t/p/original/' + poster_path} width="300" alt="poster" />
                <div>
                        <h2>{title}</h2>
                        <p>User score: {Math.parseInt(Number(vote_average) * 10)}%</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        <p>{
                            genres.map(item => <span key={item.id}>{item.name}</span>)
                        }</p>
                </div>
              </>
            );
            setIsLoading(false);
        })();
    });

    return (
      <>
        {isLoading && <div>Loading... Please wait...</div>}
        {!isLoading && <section>{movie}</section>}
        <section>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
          <Suspense fallback={<div>Loading... Please wait...</div>}>
            <Routes>
              <Route path="cast" element={<Cast id={id} />} />
              <Route path="reviews" element={<Reviews id={id} />} />
            </Routes>
          </Suspense>
        </section>
      </>
    );
};

MovieDesc.propTypes = {
    id: PropTypes.string.isRequired
};

export default MovieDesc;