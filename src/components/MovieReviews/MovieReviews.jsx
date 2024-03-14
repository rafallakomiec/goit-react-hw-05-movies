import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../../utils/APIHandlers';

const MovieReviews = ({ id }) => {
  const [ reviews, setReviews ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      const responseData = await fetchReviews(id);
      const list = responseData.results.map(item => {
        return (
          <li key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </li>
        );
      });
      setReviews(list);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <>
      {isLoading && <div>Loading... Please wait...</div>}
      {!isLoading && (
        <section>
          <ul>{reviews}</ul>
        </section>
      )}
    </>
  );
};

MovieReviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieReviews;
