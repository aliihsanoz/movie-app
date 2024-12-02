import { useContext, useState } from 'react'
import MovieContext from '../stores/MovieContext'
 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
 
 export const MovieCard = ({movie, tikla}) => {
  

  const {allMovies, setAllMovies} = useContext(MovieContext);
  const {getSelectedMovies}= useContext(MovieContext);
  const {toggle, setToggle}= useContext(MovieContext);
  const {selectedMovie,setSelectedMovie} = useContext(MovieContext);
 

 const IMAGE_PATH="https://image.tmdb.org/t/p/w500";
 


 const handleClick = (e) => {
  e.preventDefault();
  let id = e.target.getAttribute('id');
  getSelectedMovies(id);
}
 
   return (

<div   onClick={handleClick}>
    <Card id={movie.id} className={"movie-card movie-card-btn"} >
      {movie.poster_path ? 
           <Card.Img id={movie.id} className={"movie-cover"} variant="top" src={`${IMAGE_PATH}${movie.poster_path}`} />
            : 
            <div id={movie.id} className={"movie-placeholder"}>
                
            </div>

        } 
        <Card.Body id={movie.id} className={"card-movie-title-wrapper"}>
        <Card.Title id={movie.id} className={"movie-title"}>{movie.title}</Card.Title>
        <Card.Subtitle  className={"movie-title"}>{movie.vote_average}  </Card.Subtitle>
      
      </Card.Body>
  </Card>
</div>  
    )
 }
 
 export default MovieCard
 