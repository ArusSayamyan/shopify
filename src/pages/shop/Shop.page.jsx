import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ShopItems from "./components/shop-items/ShopItems.component";
import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";
import styles from "./shop.module.scss";
import { setGlobalErrorMessage } from "src/redux/common/common.actions";

const Shop = ({ history }) => {
    const [shopState, setShopState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getShopData = async () => {
            try {
                setIsLoading(true);
                const result = await axios.get("shop");
                const { data } = result;
                setShopState(data);
            } catch (error) {
                console.log(error.message);
                dispatch(setGlobalErrorMessage(error.message))

            } finally {
                setIsLoading(false)
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
        <WrapperLoader isLoading={isLoading} >
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
        </WrapperLoader>
    );
};

export default Shop;