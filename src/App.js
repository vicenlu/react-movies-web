import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import MoviesList from './pages/MoviesList';
import MovieDetail from './pages/MovieDetail';
import './css/App.css';

function App() {

  return (
    <div className="App">
      APP.JS <br />
      {/* Condicional */}
      {/* { movies &&
        <p>
          Tranqui, funciona App.js!! <br></br>
          Pelis cargadas: { movies.length }
       </p>
      } */}

      {/* Rutas */}
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/moviesList' element={<MoviesList />} />
          <Route path='/movieDetail/:id' element={<MovieDetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
