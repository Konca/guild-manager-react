import classes from "./Header.module.css";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown,faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const onClickHandler = () => {};
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navbar}>
          <li>
            <h1>
              Guild Manager &nbsp;
              <FontAwesomeIcon icon={faHome} size="1x" />
            </h1>
          </li>
          <li>
            <NavButton onClick={onClickHandler} isActive={false}>
              Raid Builder &nbsp;
              <FontAwesomeIcon icon={faCaretDown} size="1x" />
            </NavButton>
          </li>
          <li>
            <NavButton onClick={onClickHandler} isActive={false}>
              Crafting-WIP
            </NavButton>
          </li>
          <li>
            <NavButton onClick={onClickHandler} isActive={false}>
              Guild Roster-WIP
            </NavButton>
          </li>
          <li>
            <NavButton onClick={onClickHandler} isActive={false}>
              Contact Info
            </NavButton>
          </li>
        </ul>
        <NavButton className={classes.hamburger}><FontAwesomeIcon icon={faBars} size="1x" /></NavButton>
      </nav>
    </header>
  );
};

export default Header;
