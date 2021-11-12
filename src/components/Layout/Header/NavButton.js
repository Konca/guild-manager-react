import "./NavButton.css";

const NavButton = (props) => {
  return (
    <button
      className={"navbutton "+props.className}
      onClick={props.onClick}
      onBlur = {props.onBlur}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
