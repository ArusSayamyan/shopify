// favorites = [{}]
//  addedItem {}

export const updateFavorites = (favorites, addedItem) => {
  const favoritesCopy = [...favorites];

  const idx = favoritesCopy.findIndex(
    (favoriteItem) => favoriteItem.id === addedItem.id
  );

  if (idx > -1) {
    const chosenItem = { ...favoritesCopy[idx] };
    chosenItem.count += 1;
    favoritesCopy[idx] = chosenItem;
    return favoritesCopy;
  } else {
    return [...favorites, { ...addedItem, count: 1 }];
  }
};

export const decreaseFavoritesItemCount = (favorites, selectedItem) => {
  const favoritesCopy = [...favorites];
  const idx = favoritesCopy.findIndex(
    (favoriteItem) => favoriteItem.id === selectedItem.id
  );
  const chosenItem = { ...favoritesCopy[idx] };

  if (chosenItem.count === 1) {
    favoritesCopy.splice(idx, 1);
    return favoritesCopy;
  } else {
    chosenItem.count -= 1;
    favoritesCopy[idx] = chosenItem;
    return favoritesCopy;
  }
};

export const deleteFromFavorites = (favorites, selectedItem) => {
  const favoritesCopy = [...favorites];
  const idx = favoritesCopy.findIndex(
    (favoriteItem) => favoriteItem.id === selectedItem.id
  );
  favoritesCopy.splice(idx, 1);
  return favoritesCopy;
};
