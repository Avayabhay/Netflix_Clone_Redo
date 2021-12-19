const API_KEY = "6b1c98e33234ebd5369e9aafc473c363";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
};

export default requests;
