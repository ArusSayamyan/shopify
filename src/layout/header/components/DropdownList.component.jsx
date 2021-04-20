import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "src/components/button/Button.component";

import styles from "src/layout/header/components/dropdown-list.module.scss";

const DropdownList = (props) => {
  const { shopItems, toggleCartDropdown  } = props;
  const history = useHistory();
  const handleCheckOutClick = () => {
    history.push("/checkout");
    toggleCartDropdown();
  };

  return (
    <div className={styles.cartDropdown}>
      {shopItems.length ? (
        <>
         <div className={styles.box}>
        {shopItems.map((shopItem) => {
          console.log(shopItem);
          return (
            <div key={shopItem._id} className={styles.itemsContainer}>
              <img
                className={styles.selectedImage}
                src={shopItem.imageUrl}
                alt=""
              />
              <div className={styles.itemInfo}>
                <span>{shopItem.name}</span>
                <span>
                  {shopItem.count} x ${shopItem.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Button onClick={handleCheckOutClick}>go to checkout</Button>
    </>

      ) : (
        <div className={styles.emptyWrapper}>
          <div>Empty</div>
        </div>
      )}
     </div>
  );
};

const mapStateToProps = (store) => ({
  shopItems: store.shop.favorites,
});

export default connect(mapStateToProps)(DropdownList);
