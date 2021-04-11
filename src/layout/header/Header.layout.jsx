import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { ReactComponent as CrownSVG } from "src/assets/crown.svg";
import { ReactComponent as BagSVG } from "src/assets/shopping-bag.svg";
import DropdownList from "src/layout/header/components/DropdownList.component";

import styles from "./header.module.scss";

const Header = (props) => {
  const { shopItemsCount } = props;
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
            {cartIsOpen && <DropdownList />}
          </div>
        </OutsideClickHandler>
      </nav>
    </header>
  );
};

const mapStateToProps = (store) => ({
 
  shopItemsCount: store.shop.favorites.length,
});

export default connect(mapStateToProps)(Header);
