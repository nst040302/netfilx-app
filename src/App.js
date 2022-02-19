import Header from './components/Header'
import Banner from './components/Banner'
import Row from './components/Row'
import Requests from './requests'

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title='Trending' fetchURL={Requests.fetchTrending }/>
      <Row title='Originals' fetchURL={Requests.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchURL={Requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={Requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchURL={Requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchURL={Requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchURL={Requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchURL={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
