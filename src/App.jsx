import { Switch, Route, NavLink } from 'react-router-dom';
import Movie from './components/Movie.jsx';
import FavMovie from './components/FavMovie.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, nextMovie, previousMovie } from './store/actions/index.js';


function App() {
  const dispatch = useDispatch();

  const sira = useSelector((state) => state.sira);
  const movies = useSelector((state) => state.movies);
  const favMovies = useSelector((state) => state.favMovies);
  const movie = movies[sira];

  function oncekiFilm() {
    dispatch(previousMovie());
  }

  function sonrakiFilm() {
    dispatch(nextMovie());
  }

  function handleAdd(movie) {
    dispatch(addToFavorites(movie.id));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          {movies.length === 0 ?
            (<div className="text-center">Eklenecek yeni film bulunamadı...</div>)
            :
            (<><Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {sira > 0 && <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>}
            {movies.length !== sira + 1 && <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>}

            <button onClick={() => handleAdd(movie)} className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white">
              Listeme ekle
            </button>
          </div>
          </>)}
        </Route>

        <Route path="/listem">

          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
