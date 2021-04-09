import styles from "./shop-items.module.scss";

import { useDispatch } from "react-redux";
import ShopItem from "../shop-item/ShopItem.component";
import classNames from "classnames";

import { addToFavorites } from "src/redux/shop/shop.actions";

const ShopItems = (props) => {
  const dispatch = useDispatch();
  const { category, data, handleShopCategoryClick } = props;

  const titleClasses = classNames({
    [styles.title]: true,
    "u-cursor--pointer": !!handleShopCategoryClick,
  });

  const handleAddClick = (mySelectedShopItem) => {
    dispatch(addToFavorites(mySelectedShopItem));
  };

  return (
    <div className={styles.container}>
      <h1 className={titleClasses} onClick={handleShopCategoryClick}>
        {category}
      </h1>
      <div className={styles.list}>
        {data.map((shopItem) => {
          return (
            <ShopItem
              shopItem={shopItem}
              key={shopItem._id}
              handleAddClick={() => handleAddClick(shopItem)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopItems;
