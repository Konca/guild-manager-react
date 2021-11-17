import classes from "./Button.module.css";

const Button = (props) => {
  const typeStyle = (type) => {
    if (type === "submit") return classes.submit;
    if (type === "close") return classes.close;
    if (type === "xButton") return classes.x;
    if (type === undefined || type === "") return "";
  };

  return (
    <button
      className={classes.button + " " + typeStyle(props.type)}
      onClick={props.onClick}
      onBlur={props.onBlur}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
