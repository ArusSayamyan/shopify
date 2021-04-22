import { useSelector } from "react-redux";

// COMPONENTS
import CategoryItem from "src/pages/home/components/category-item/CategoryItem.component";

// STYLES
import styles from "./home.module.scss";

import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";

const Home = (props) => {
  const { isLoading, categories } = useSelector((store) => store.shop);

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
