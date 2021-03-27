import styles from "./category-item.module.scss";
import { useState } from "react";

const CategoryItem = (props) => {
  const { category } = props;

  const [data, setData] = useState({ name: "Narek" });

  const handleClick = () => {
    setData({ ...data, age: 62 });
  };

  return (
    <li className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />
        <div className={styles.content}>
          <div className={styles.title}>{category.title}</div>
          <div className="u-uppercase">shop now</div>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
