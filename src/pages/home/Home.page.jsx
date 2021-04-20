// COMPONENTS
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "src/pages/home/components/category-item/CategoryItem.component";

// STYLES
import styles from "./home.module.scss";

import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";

const Home = (props) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("categories");
                setCategories(response.data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);
   
  
    

    return (
        <WrapperLoader isLoading={isLoading}>
            <ul className={styles.container}>
                {categories.map((category) => {
                    return <CategoryItem key={category._id} category={category} />;
                })}
            </ul>
        </WrapperLoader>
    );
};

export default Home;