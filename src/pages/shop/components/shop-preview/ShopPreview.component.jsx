import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// BASE COMPONENTS
import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";
import { getShopDataAsync } from "src/redux/shop/shop.actions";
// COMPONENTS
import ShopItems from "../shop-items/ShopItems.component";

import styles from "./shop-preview.module.scss";

const Shop = ({ history }) => {
  const dispatch = useDispatch();
  const { categories, isLoading, shopIsLoading, shopData } = useSelector(
    (store) => store.shop
  );

  useEffect(() => {
    dispatch(getShopDataAsync());
  }, []);

  const categoriesList = categories.map((category) => category.routeName);

  const handleShopCategoryClick = (category) => {
    history.push(`/shop/${category}`);
  };

  return (
    <WrapperLoader isLoading={isLoading || shopIsLoading}>
      <div className={styles.container}>
        {categoriesList.map((category) => {
          const filteredData = shopData.filter(
            (shopItem) => shopItem.category === category
          );

          return (
            <ShopItems
              key={category}
              category={category}
              data={filteredData.slice(0, 4)}
              handleShopCategoryClick={() => handleShopCategoryClick(category)}
            />
          );
        })}
      </div>
    </WrapperLoader>
  );
};

export default Shop;
