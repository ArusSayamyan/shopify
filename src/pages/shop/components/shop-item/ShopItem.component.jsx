import styles from "./shop-item.module.scss";

const ShopItem = (props) => {
    const { shopItem} = props;


    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={shopItem.imageUrl} alt="" />
                <button className={styles.btn}>Add to cart</button>
            </div>

            <div className={styles.info}>
                <span>{shopItem.name}</span>
                <span>{shopItem.price}</span>
            </div>
        </div>
    );
};

export default ShopItem;