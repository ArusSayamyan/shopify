import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import styles from "./shop-modal.module.scss";
import  ShopImg from "src/assets/shop.jpg";
const ShopModal = () => {

    const history = useHistory();

  const handleClick = () => {
    history.push("/auth");
  };

    return ReactDOM.createPortal(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Ooops, Please sign in first.</h1>
                <div><img src={ShopImg} alt="shop-image" className={styles.SignInImg} /></div>
                <button className={styles.signInBtn} onClick={handleClick}>Sign in</button>
            </div>
            
        </div>,
        document.getElementById("root")
    );
};

export default ShopModal;