export const selectFavorite = (state) => state.favorite.items;
export const selectIsFavorite = (itemId) => (state) => {
  return state.favorite.items.find((item) => item._id === itemId);
};
