import styles from  "../empty-data-message/empty-data-message.module.scss"
import { useSelector } from "react-redux";

const EmptyDataMessage = (props) => {
  const { children } = props;
  const favorites = useSelector((state) => state.shop.favorites);
  const hasData = !!favorites.length
  const message = "There is no selected items";
 
  return hasData ? children : <div className={styles.EmptyDataMessage}>{message}</div>;
};

export default EmptyDataMessage;
