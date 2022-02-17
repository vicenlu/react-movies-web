import { useParams, useLocation } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { movieData } = location.state;

  return (
    <>
      Soy Movie Detail!! <br></br>
      Con useParams: {id} <br></br>
      Con useLocation, state: {movieData.title}
    </>
  );
}

export default MovieDetail;
