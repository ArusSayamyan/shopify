// COMPONENTS
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "src/pages/home/components/category-item/CategoryItem.component";

import Loader from "src/components/loader/Loader.component";
// STYLES
import styles from "./home.module.scss";

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

    const sortedCategories = categories.sort((a, b) => a.id - b.id);

    return isLoading ? (
        <div className={styles.loaderWrapper}>
            <Loader />
        </div>
    ) : (
        <ul className={styles.container}>
            {sortedCategories.map((category) => {
                return <CategoryItem key={category._id} category={category} />;
            })}
        </ul>
    );
};

export default Home;