import {
  Link
} from 'react-router-dom';

function Welcome() {
  return (
    <>
      holaaaa, soy el Welcome!! <br></br>
      <Link to="/moviesList">
        Ir a listado de pelis, usando Link!!
      </Link>
    </>
  );
}

export default Welcome;
