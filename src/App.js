import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="TRENDING NOW"fetchUrl={requests.fetchTrending}/>
      <Row title="ACTION"fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY "fetchUrl={requests.fetchComedyMovies}/>
      <Banner/>
      <Row title="HORROR "fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE"fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES"fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
