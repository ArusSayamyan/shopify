import axios from "axios";
import { useEffect, useState } from "react";

// BASE COMPONENTS
import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";

// COMPONENTS
import ShopItems from "../shop-items/ShopItems.component";

import styles from "./shop-preview.module.scss";

const Shop = ({ history }) => {
    const [shopState, setShopState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getShopData = async () => {
            try {
                setIsLoading(true);
                const result = await axios.get("shop");
                const { data } = result;
                setShopState(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        getShopData();

        // TODO --> REVIEW
        // (async () => {
        //     const result = await axios.get("shop");
        //     const { data } = result;
        //     setShopState(data);
        // })();

        // axios.get("shop").then((result) => {
        //     const { data } = result;
        //     setShopState(data);
        // });
    }, []);

    const categories = ["hats", "sneakers", "womens", "mens", "jackets"];

    const handleShopCategoryClick = (category) => {
        history.push(`/shop/${category}`);
    };

    return (
        <WrapperLoader isLoading={isLoading}>
            <div className={styles.container}>
                {categories.map((category) => {
                    const filteredData = shopState.filter(
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