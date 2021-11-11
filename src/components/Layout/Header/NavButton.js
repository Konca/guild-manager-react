import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <button
      className={`${classes.button} ${props.isActive ? classes.active : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
