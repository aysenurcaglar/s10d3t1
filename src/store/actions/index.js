export const PREVIOUS_MOVIE = 'PREVIOUS_MOVIE';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const previousMovie = () => ({
    type: 'PREVIOUS_MOVIE',
  });
  
  export const nextMovie = () => ({
    type: 'NEXT_MOVIE',
  });
  
  export const addToFavorites = (id) => ({
    type: 'ADD_TO_FAVORITES',
    payload: id,
  });
  
  export const removeFromFavorites = (id) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id,
  });


