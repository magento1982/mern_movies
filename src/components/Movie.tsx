import React from 'react';
import { useParams } from 'react-router';

//components
import BreadCrumb from './BreadCrumb';

import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
//hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie: React.FC = () => {
  let { movieId } = useParams();
  if(!movieId) {
    movieId = ''
  }
  
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner/>;
  if (error) return <div>Something went wrong ...</div>;
  
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
    </>
  );
};

export default Movie;