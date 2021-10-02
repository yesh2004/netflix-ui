import {useState,useEffect} from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Hero from './components/Hero'
import Header from './components/Header'
const URL='https://api.themoviedb.org/3'
const API_KEY='405559767193c88f994eafd10efe32eb'

const endpoints={
  originals:'/discover/tv',
  trending:'/trending/all/week',
  now_playing:'/movie/now_playing',
  popular:'/movie/popular',
  top_rated:'/movie/top_rated',
  upcoming:'/movie/upcoming'
}
function App() {
  const [originals,setOriginals]=useState([])
  const [trending,setTrending]=useState([])
  const [nowPlaying,setNowPlaying]=useState([])
  const [popular,setPopular]=useState([])
  const [topRated,setTopRated]=useState([])
  const [upcoming,setUpcoming]=useState([])

 useEffect(() => {
  // Load Originals
  axios
    .get(`${URL}${endpoints.originals}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setOriginals(res.data.results));

  // Get other categories with the same pattern here
  axios
    .get(`${URL}${endpoints.trending}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setTrending(res.data.results));

  axios
    .get(`${URL}${endpoints.now_playing}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setNowPlaying(res.data.results));

  axios
    .get(`${URL}${endpoints.popular}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setPopular(res.data.results));

  axios
    .get(`${URL}${endpoints.top_rated}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setTopRated(res.data.results));
  axios
    .get(`${URL}${endpoints.upcoming}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setUpcoming(res.data.results));

}, []);
  return (
    <div>
    <Header/>
    <Hero movie={originals[Math.floor(Math.random()*originals.length)]}/>
     <Movie title='Netflix Originals' movies={originals} />
     <Movie title='Trending' movies={trending} />
     <Movie title='Now Playing' movies={nowPlaying} />
     <Movie title='Popular' movies={popular} />
     <Movie title='Top Rated' movies={topRated} />
     <Movie title='Upcoming' movies={upcoming} />
    </div>
  );
}

export default App;
