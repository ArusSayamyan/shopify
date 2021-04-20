import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setModalState } from "src/redux/shop/shop.actions";
import styles from "./shop-modal.module.scss";
import ShopImg from "src/assets/shop.jpg";

const ShopModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBackClick = () => {
      dispatch(setModalState(false));
  };

  const stop = (event) => event.stopPropagation();

  const goToSignIn = () => {
      dispatch(setModalState(false));
      history.push("/auth");
  };
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.content} onClick={stop}>
        <h1>Ooops, Please sign in first.</h1>
        <div>
          <img src={ShopImg} alt="shop" className={styles.SignInImg} />
        </div>
        <button className={styles.signInBtn} onClick={goToSignIn}>
          Sign in
        </button>
        <button className={styles.signInBtn} onClick={handleBackClick}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ShopModal;
