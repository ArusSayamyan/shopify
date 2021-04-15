const countShopItems = (favorites) => {
    let acc = 0;
    for (let i = 0; i < favorites.length; i++) {
        const currentValue = favorites[i].count;
        acc += currentValue;
    }
    return acc;
};

export default countShopItems;
