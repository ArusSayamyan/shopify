// COMPONENTS
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "src/pages/home/components/category-item/CategoryItem.component";

// STYLES
import styles from "./home.module.scss";

const Home = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const sortedCategories = categories.sort((a, b) => a.id - b.id);

  console.log(props);
  return (
    <ul className={styles.container}>
      {sortedCategories.map((category) => {
        return <CategoryItem key={category._id} category={category} />;
      })}
    </ul>
  );
};

export default Home;
