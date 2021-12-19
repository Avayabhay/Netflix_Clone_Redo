import "./App.css";
import Row from "./Rows";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top-Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy" fetchURL={requests.fetchTopRated} />
      <Row title="Documentaries" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
