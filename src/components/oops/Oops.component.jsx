import styles from "./oops.module.scss";
import  ErrorImg from "src/assets/error.png";

const Oops = (props) => {
    const { errorMessage, children } = props;
    return errorMessage ? <div className={styles.container}>{errorMessage}<img src={ErrorImg} className={styles.ErrorImg} alt="error.png"/></div>: children;
};

export default Oops;