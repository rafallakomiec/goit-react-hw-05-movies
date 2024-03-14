import PropTypes from 'prop-types';
import { useState } from 'react';

const Search = ({ query, onSubmit }) => {
  const [queryField, setQueryField] = useState(query);

  const onChangeHandler = (event) => {
    setQueryField(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Type here to search" name="search" cols="400" value={queryField} onChange={onChangeHandler} />
      <input type="submit" value="Click to Search!" />
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
