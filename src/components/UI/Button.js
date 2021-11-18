import styles from "./Button.module.css";

const Button = (props) => {
  const typeStyle = (type) => {
    if (type === "submit") return styles.submit;
    if (type === "close") return styles.close;
    if (type === "xButton") return styles.x;
    return "";
  };

  return (
    <button
      className={`
        ${styles.button}  ${typeStyle(props.type)} ${
        props.disabled ? " " + styles.disabled : ""
      }`}
      onClick={props.onClick}
      onBlur={props.onBlur}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
