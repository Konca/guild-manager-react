import classes from "./Header.module.css";
import NavButton from "./NavButton";

import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Dropdown from "./Dropdown";
import ImportForm from "../../ImportForm";
import OpenRaid from "../../OpenRaid";

const Header = (props) => {
  const path = useLocation();
  const [raidDDActive, setRaidDDActive] = useState(false);
  const [importIsShown, setImportIsShown] = useState(false);
  const [openRaidIsShown, setOpenRaidIsShown] = useState(false);

  const raidDDHideHandler = () => {
    setRaidDDActive(false);
  };
  const raidDDToggleHandler = () => {
    setRaidDDActive((prevState) => !prevState);
  };
  const newRaidHandler = () => {
    raidDDHideHandler();
    showImportHandler();
  };
  const openRaidHandler = () => {
    raidDDHideHandler();
    showOpenRaidHandler();
  };
  const showImportHandler = () => {
    setImportIsShown(true);
  };
  const hideImportHandler = () => {
    setImportIsShown(false);
  };

  const showOpenRaidHandler = () => {
    setOpenRaidIsShown(true);
  };
  const hideOpenRaidHandler = () => {
    setOpenRaidIsShown(false);
  };

  return (
    <Fragment>
      {importIsShown && <ImportForm onCloseImport={hideImportHandler} />}
      {openRaidIsShown && <OpenRaid onCloseOpenRaid={hideOpenRaidHandler} />}
      <header className={classes.header}>
        <nav>
          <ul className={classes.navbar}>
            <li>
              <NavLink to="/Home" activeClassName={classes.active}>
                <h1>
                  Guild Manager &nbsp;
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </h1>
              </NavLink>
            </li>
            <Dropdown ddVisible={raidDDActive} onBlur={raidDDHideHandler}>
              <NavButton
                onClick={raidDDToggleHandler}
                className={
                  raidDDActive || path.pathname === "/RaidBuilder"
                    ? "active"
                    : ""
                }
              >
                Raid Builder &nbsp;
                <FontAwesomeIcon
                  className={classes.ico}
                  icon={faCaretDown}
                  size="1x"
                />
              </NavButton>
              <NavButton onClick={newRaidHandler}>New Raid</NavButton>

              <NavButton onClick={openRaidHandler}>Open Raid</NavButton>
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
