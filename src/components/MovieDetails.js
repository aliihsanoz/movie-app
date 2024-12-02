import { useContext } from 'react'
import MovieContext from '../stores/MovieContext'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Card';
const MovieDetails = () => {
  const {selectedMovie,setSelectedMovie} = useContext(MovieContext);
    const IMAGE_PATH="https://image.tmdb.org/t/p/w500"
    
  return (

  <div className={"movie-details"}>
      <Card className={"movie-content"}>
          {selectedMovie.poster_path ? 
              <Card.Img className={"movie-details-cover "} 
                        variant="top" 
                        src={`${IMAGE_PATH}${selectedMovie.poster_path}`}
              /> : <div className={"movie-placeholder"}></div>
          } 
          <Card.Body className={"movie-text-content"}>
            <Card.Title className={"movie-title-details"}>
            <h3> {selectedMovie.title} </h3>
            </Card.Title>
            <Card.Text>
                <span><b>Vote Average:</b> {selectedMovie.vote_average} </span><br/>  
                <span><b>Release:</b> {selectedMovie.release_date} </span><br/>
                <span><b>Summary</b></span><br/>
                <span className={"movie-overview"}>{selectedMovie.overview}</span>
            </Card.Text>
          </Card.Body>
      </Card>  
   </div>
  )
}

export default MovieDetails