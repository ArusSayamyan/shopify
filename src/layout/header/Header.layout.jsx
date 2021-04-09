import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { ReactComponent as CrownSVG } from "src/assets/crown.svg";
import { ReactComponent as BagSVG } from "src/assets/shopping-bag.svg";
import Button from "src/components/button/Button.component";

import styles from "./header.module.scss";

const Header = (props) => {
  const { shopItemsCount, shopItems } = props;
  const history = useHistory();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleClick = () => {
    history.push("/home");
  };

  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);

  return (
    <header className={styles.container}>
      <CrownSVG className="u-cursor--pointer" onClick={handleClick} />
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.item}>
          SHOP
        </Link>
        <Link to="/contacts" className={styles.item}>
          CONTACTS
        </Link>
        <Link to="/auth" className={styles.item}>
          SIGN IN
        </Link>
        <OutsideClickHandler
          disabled={!cartIsOpen}
          onOutsideClick={toggleCartDropdown}
        >
          <div className={styles.item}>
            <div className={styles.cart} onClick={toggleCartDropdown}>
              <BagSVG className={styles.bag} />
              {!!shopItemsCount && (
                <span className={styles.count}>{shopItemsCount}</span>
              )}
            </div>
            {cartIsOpen && (
              <div className={styles.cartDropdown}>
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
                <Button>go to checkout</Button>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </nav>
    </header>
  );
};

const mapStateToProps = (store) => ({
  shopItems: store.shop.favorites,
  shopItemsCount: store.shop.favorites.length,
});

export default connect(mapStateToProps)(Header);
