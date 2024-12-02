import { createContext, useState, useEffect } from 'react'
import axios from 'axios';
const MovieContext = createContext();
export const MovieContextProvider = ({children}) => {

  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const GENRE_POPULAR = "?sortby=popularity.desc";

  const API_KEY_TEXT="&api_key=";
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const PAGE ="&page=1"
  const [allMovies, setAllMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState({})
  // const URL = BASE_URL+movieGenre+API_KEY_TEXT+API_KEY+PAGE;
 
  
  
  const [toggle, setToggle] = useState(true);

  const [menus, setMenus] = useState([
    { id: 1, text: "Home",     apiUrl: "https://api.themoviedb.org/3/discover/movie?sortby=vote_average&api_key="+process.env.REACT_APP_MOVIE_API_KEY },
    { id: 2, text: "Comedies", apiUrl: "https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=10&api_key="+process.env.REACT_APP_MOVIE_API_KEY },
    { id: 3, text: "Kids",     apiUrl: "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key="+process.env.REACT_APP_MOVIE_API_KEY },
    { id: 4, text: "Drama",    apiUrl: "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key="+process.env.REACT_APP_MOVIE_API_KEY  }
  ]);
  const [selectedMenuItem,setselectedMenuItem] = useState(menus[0].text);
  const [apiUrl, setApiUrl]= useState(menus[0].apiUrl);
 
 

   

  const getAllMovies = async () => {
 
    const {data: {results}} = await axios.get(`${ apiUrl }`)
    setAllMovies(results) 
 
  }

  const getSelectedMovies = async (id) => {
  setToggle(!toggle);
  let selectMovie=allMovies.find((movie) => movie.id.toString().trim()===id)
  setSelectedMovie(selectMovie);
}


 
  const values={
    allMovies,
    setAllMovies,
    selectedMovie,
    setSelectedMovie,
    apiUrl, 
    setApiUrl,
    getAllMovies,
    toggle,
    setToggle,
    getSelectedMovies,
    menus,
    selectedMenuItem,
    setselectedMenuItem
 
  }



 

  return (
    <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContext;