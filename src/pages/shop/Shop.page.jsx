import axios from "axios";
import { useEffect, useState } from "react";
import ShopItems from "./components/shop-items/ShopItems.component";

import styles from "./shop.module.scss";

const Shop = ({ history }) => {
    const [shopState, setShopState] = useState([]);

    useEffect(() => {
        const getShopData = async () => {
            try {
                const result = await axios.get("shop");
                const { data } = result;
                setShopState(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                // TODO --> TURN OFF LOADER
            }
        };
        getShopData();
    }, []);
    
    const categories = ["hats", "sneakers", "womens", "mens", "jackets"];

    const handleShopCategoryClick = (category) => {
        console.log(category);
        history.push(`/shop/${category}`);
    };

    return (
        <div className={styles.container}>
            {categories.map((category) => {
                const filteredData = shopState.filter((shopItem) => shopItem.category === category);

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
    );
};

export default Shop;