import { movies } from '../../data.js';
import { PREVIOUS_MOVIE, NEXT_MOVIE, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/index.js';

const initialState = {
  sira: 0,
  movies: movies,
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUS_MOVIE:
      return { ...state, sira: state.sira - 1 };

    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };

    case ADD_TO_FAVORITES:

      const addedMovie = state.movies.find(movie => movie.id === action.payload);
      return {
        ...state,
        favMovies: [...state.favMovies, addedMovie],
        movies: state.movies.filter(movie => movie.id !== action.payload),
        sira: state.movies.length - state.sira === 1 ? state.sira === 0 ? 0 : state.sira - 1 : state.sira
      };


    case REMOVE_FROM_FAVORITES:
      const removedMovie = state.favMovies.find(movie => movie.id === action.payload);
      return {
        ...state,
        favMovies: state.favMovies.filter(movie => movie.id !== action.payload),
        movies: [...state.movies, removedMovie],
      };


    default:
      return state;
  }
};

export default reducer;