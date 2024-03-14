import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCast } from '../../utils/APIHandlers';

const MovieCast = ({ id }) => {
  const [ cast, setCast ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      const responseData = await fetchCast(id);
      const list = responseData.cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={'https://image.tmdb.org/t/p/original' + item.profile_path}
              alt="Actor picture"
              width="200"
            />
            <h3>{item.original_name}</h3>
            <h4>{item.character}</h4>
          </li>
        );
      });
      setCast(list);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <>
      {isLoading && <div>Loading... Please wait...</div>}
      {!isLoading && (
        <section>
          <ul>{cast}</ul>
        </section>
      )}
    </>
  );
};

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieCast;
