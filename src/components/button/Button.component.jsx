import styles from "./button.module.scss";

const Button = (props) => {
  const { children, type = "button", ...restProps } = props;
  return (
    <button className={styles.btn} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
