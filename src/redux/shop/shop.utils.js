// favorites = [{}]
//  addedItem {}

export const updateFavorites = (favorites, addedItem) => {
    const favoritesCopy = [...favorites];

    const idx = favoritesCopy.findIndex((favoriteItem) => favoriteItem.id === addedItem.id);

    if (idx > -1) {
        const chosenItem = { ...favoritesCopy[idx] };
        chosenItem.count += 1;
        favoritesCopy[idx] = chosenItem;
        return favoritesCopy;
    } else {
        return [...favorites, { ...addedItem, count: 1 }];
    }
};
