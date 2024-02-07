import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const { movieID } = useParams(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&i=${movieID}`);
        if (!response.ok) {
          throw new Error('Errore nella ricezione del server');
        }
        const data = await response.json();
        if (data.Response === 'True') {
          setMovieDetails(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieID]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/:${movieID}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDg0ZGUwODVmYTAwMTk2MzFhMmMiLCJpYXQiOjE3MDcxMzcxMDEsImV4cCI6MTcwODM0NjcwMX0.fDeNIskXwXmS2dbKks7M9Xh0D0ClSNxGX0leXchE0vk'
          }
        });
        if (!response.ok) {
          throw new Error('Errore nella ricezione del server');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [movieID]);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        {movieDetails && (
          <>
            <Card.Img variant="top" src={movieDetails.Poster} alt={movieDetails.Title} />
            <Card.Body>
              <Card.Title>{movieDetails.Title}</Card.Title>
              <Card.Text>{movieDetails.Plot}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Director: {movieDetails.Director}</ListGroup.Item>
              <ListGroup.Item>Actors: {movieDetails.Actors}</ListGroup.Item>
              <ListGroup.Item>Year: {movieDetails.Year}</ListGroup.Item>
            </ListGroup>
          </>
        )}
      </Card>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment._id}>{comment.comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;



