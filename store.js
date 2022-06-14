//building a store

function createStore(reducer) {
  let currentState = reducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

const initialState = {
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const addFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addFavorite];
      return { favorites };
    }

    case 'REMOVE_FAVORITE': {
      const removeFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removeFavorite.id
      );
      return { favorites };
    }

    default:
      return state;
  }
}

const store = createStore(favoritesReducer);

export default store;
