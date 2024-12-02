import { useContext, useEffect } from 'react'
import MovieContext from '../stores/MovieContext'
import MovieCard from './MovieCard';
import axios from 'axios';

import '../App.css';
import MovieDetails from './MovieDetails';

// import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";

 
export const MovieList = () => {

 const {allMovies, setAllMovies} = useContext(MovieContext);
 const {getAllMovies}= useContext(MovieContext);
 const {toggle, setToggle}= useContext(MovieContext);
 const {movieGenre}= useContext(MovieContext);
 const {apiUrl, setApiUrl}= useContext(MovieContext);
 const {menus}= useContext(MovieContext);
 const {selectedMenuItem,setselectedMenuItem} = useContext(MovieContext);
 
 
 useEffect(()=> {
     setToggle(true);

     //setApiUrl(menus[0].apiUrl);
    // 
    getAllMovies();
  },[apiUrl]);
 
 

  return (
    
        <div className={'container-bg'}>
            <Container style={{display: toggle ? 'block' : 'none' }}>
              <Row >
                <h4 className={'text-white fw-bold  '}>{selectedMenuItem} - Movie List </h4>
                 
              </Row>
              <Row xs={1} md={5} className={'row-css'}>
            {  
                allMovies.map((movie, index) => 
                (<MovieCard  key={movie.id} movie = {movie} /> )
                             )
                
            }
            { }
                   
              </Row>
            </Container>  
            <div style={{display: toggle ? 'none' : 'block' }}>
               <MovieDetails /> 
            </div>
        </div>
  )
}

export default MovieList



