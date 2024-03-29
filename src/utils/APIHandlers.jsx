import axios from "axios";

const options = {
  baseURL: 'https://api.themoviedb.org/',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTgwNzg4ODVmNTI4MGFhZTliOGExMjc4NGVjOWRlMyIsInN1YiI6IjY1ZjBiMWYwM2RjODg1MDE4NWM1OGMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPEH3lPfpJB3gniIsVuxoAPMdf5HkmnVHtEgcGtmmOY'
  }
};

const fetchTrending = async () => { 
    try {
      const response = await axios('3/trending/movie/day', options);
      if (response.status !== 200) throw new Error(response.statusText);
      return response.data;
    } catch (error) {
      return (<h2>Error occured: {error}.<br/>Please reload the page.</h2>);
    }
};

const fetchMovies = async (query) => {
  try {
    const response = await axios('3/search/movie', {
      ...options,
      params: {
        query: query
      }
    });
    if (response.status !== 200) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    alert(`Error occured: ${error}. Please try again.`);
  }
};

const fetchMovie = async (id) => {
  try {
    const response = await axios('3/movie/' + id, options);
    if (response.status !== 200) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    return (
      <h2>
        Error occured: {error}.<br />
        Please reload the page.
      </h2>
    );
  }
};

const fetchCast = async (id) => {
  try {
    const response = await axios('3/movie/' + id + '/credits', options);
    if (response.status !== 200) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    return (
      <h2>
        Error occured: {error}.<br />
        Please reload the page.
      </h2>
    );
  }
};

const fetchReviews = async (id) => {
  try {
    const response = await axios('3/movie/' + id + '/reviews', options);
    if (response.status !== 200) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    return (
      <h2>
        Error occured: {error}.<br />
        Please reload the page.
      </h2>
    );
  }
};

export {fetchTrending, fetchMovies, fetchMovie, fetchCast, fetchReviews};