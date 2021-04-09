import axios from "axios";
import { useEffect, useState } from "react";

import ShopItems from "../shop/components/shop-items/ShopItems.component";

const ShopCategory = (props) => {
  const [shopItems, setShopItems] = useState([]);
  const category = props.match.params.category;

  useEffect(() => {
    axios.get(`shop/${category}`).then((result) => {
      setShopItems(result.data);
    });
  }, [category]);
  return (
    <div>
      <ShopItems category={category} data={shopItems} />
    </div>
  );
};

export default ShopCategory;
