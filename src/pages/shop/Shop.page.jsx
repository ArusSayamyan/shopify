import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ShopPreview from "./components/shop-preview/ShopPreview.component";
import ShopCategory from "./components/shop-category/ShopCategory.component";
import ShopModal from "src/pages/shop/components/shop-modal/ShopModal.component";

import styles from "./shop.module.scss";

const Shop = () => {
  const { modalIsShown } = useSelector((store) => store.shop);

  return (
    <div className={styles.container}>
      <Route component={ShopPreview} exact path="/shop" />
      <Route component={ShopCategory} path="/shop/:category" />
      {modalIsShown && <ShopModal />}
    </div>
  );
};

export default Shop;
