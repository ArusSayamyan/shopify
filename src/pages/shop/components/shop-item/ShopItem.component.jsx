import { addToFavorites, setModalState } from "src/redux/shop/shop.actions";
import { connect, useDispatch } from "react-redux";

import styles from "./shop-item.module.scss";

const ShopItem = (props) => {
    const { shopItem, user } = props;
    const dispatch = useDispatch();

    const handleAddClick = () => {
        if (user) dispatch(addToFavorites(shopItem));
        else dispatch(setModalState(true));
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={shopItem.imageUrl} alt="" />
                <button className={styles.btn} onClick={handleAddClick}>
                    Add to cart
                </button>
            </div>

            <div className={styles.info}>
                <span>{shopItem.name}</span>
                <span>{shopItem.price}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    user: store.auth.user,
});

export default connect(mapStateToProps)(ShopItem);