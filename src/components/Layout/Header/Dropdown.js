import styles from "./Dropdown.module.css";
import React from "react";
import { Fragment } from "react";
const Dropdown = (props) => {
  const dropdownItems = React.Children.toArray(props.children);
  const displayList = dropdownItems.map((element, i) => {
    if (!props.ddVisible && i >= 1) return "";
    return (
      <li key={"dropdown" + i} className={styles.dropdownItem}>
        {element}
      </li>
    );
  });

  const blurOverlay = props.ddVisible?(<div
  id={styles.dropdowOverlayBackground}
  onClick={props.onBlur}
></div>):"";
  return (
    <Fragment>
      <ul className={styles.dropdown}>{displayList} </ul>
      {blurOverlay}
    </Fragment>
  );
};
export default Dropdown;
