import classNames from "classnames";
import styles from "./input.module.scss";

const Input = (props) => {
  const { label, value = "", ...restProps } = props;
  // const label = props.label;
  // const value = props.value;

  const labelClasses = classNames({
    [styles.label]: true,
    [styles.active]: value,
  });

  return (
    <div className={styles.container}>
      <input className={styles.input} value={value} {...restProps} />
      <label className={labelClasses}>{label}</label>
    </div>
  );
};

export default Input;
