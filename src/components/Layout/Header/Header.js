import classes from "./Header.module.css";
import NavButton from "./NavButton";

import { NavLink, Link,useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Dropdown from "./Dropdown";

const Header = () => {
  const path=useLocation ()
  const [raidDDActive, setRaidDDActive] = useState(false);
  const raidDDHideHandler = () => {
    setRaidDDActive(false);
  };
  const raidDDToggleHandler = () => {
    setRaidDDActive((prevState) => !prevState);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul className={classes.navbar}>
            <li>
              <NavLink exact={true} to="/" activeClassName={classes.active}>
                <h1>
                  Guild Manager &nbsp;
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </h1>
              </NavLink>
            </li>
            <Dropdown ddVisible={raidDDActive} onBlur={raidDDHideHandler}>
              <NavButton
                onClick={raidDDToggleHandler}
                className={raidDDActive||path.pathname==="/RaidBuilder" ? "active" : ""}
              >
                Raid Builder &nbsp;
                <FontAwesomeIcon
                  className={classes.ico}
                  icon={faCaretDown}
                  size="1x"
                />
              </NavButton>
              <Link to="/RaidBuilder">
                <NavButton onClick={raidDDHideHandler}>New Raid</NavButton>
              </Link>
              <Link to="/RaidBuilder">
                <NavButton onClick={raidDDHideHandler}>Open Raid</NavButton>
              </Link>
            </Dropdown>
            <li>
              <NavLink to="/Crafting">
                <NavButton>Crafting-WIP</NavButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="/GuildRoster">
                <NavButton>Guild Roster-WIP</NavButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactInfo">
                <NavButton>Contact Info</NavButton>
              </NavLink>
            </li>
          </ul>
          <div className={classes.hamburger}>
            <NavButton>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </NavButton>
          </div>
        </nav>
      </header>
      <Dropdown></Dropdown>
    </Fragment>
  );
};

export default Header;
