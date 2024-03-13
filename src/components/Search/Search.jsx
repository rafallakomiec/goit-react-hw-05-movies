import PropTypes from 'prop-types';

const Search = ({ query, onSubmitHandler, submitRef }) => {
  return (
    <form ref={submitRef} onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Type here to search" name="search" cols="400" value={query} />
      <input type="submit" value="Click to Search!" />
    </form>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  submitRef: PropTypes.object.shape({ current: PropTypes.string.isRequired }),
};

export default Search;
