import styles from "./shop-items.module.scss";

import ShopItem from "../shop-item/ShopItem.component";
import classNames from "classnames";

const ShopItems = (props) => {
  const { category, data, handleShopCategoryClick } = props;

  const titleClasses = classNames({
    [styles.title]: true,
    "u-cursor--pointer": !!handleShopCategoryClick,
  });

  return (
    <div className={styles.container}>
      <h1 className={titleClasses} onClick={handleShopCategoryClick}>
        {category}
      </h1>
      <div className={styles.list}>
        {data.map((shopItem) => {
          return <ShopItem shopItem={shopItem} key={shopItem._id} />;
        })}
      </div>
    </div>
  );
};

export default ShopItems;
