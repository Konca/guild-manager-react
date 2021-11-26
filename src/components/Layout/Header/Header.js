import styles from "./Header.module.css";
import NavButton from "./NavButton";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState,useContext } from "react";
import Dropdown from "./Dropdown";
import ImportForm from "../Forms/ImportRaid/ImportForm";
import HistoryForm from "../Forms/RaidHistory/HistoryForm";
import CsvReader from "../../../Context/csv-reader.js"

const Header = () => {
  
  const csvCtx = useContext(CsvReader);
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
    csvCtx.setIsNewRaid(true)
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
    <>
        {importIsShown && <ImportForm onCloseForm={hideImportHandler} />}
      {openRaidIsShown && <HistoryForm onCloseForm={hideOpenRaidHandler} />}
      <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <NavLink to="/Home" activeClassName={styles.active}>
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
                  className={styles.ico}
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
          <div className={styles.hamburger}>
            <NavButton>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </NavButton>
          </div>
        </nav>
      </header>
      <Dropdown></Dropdown>
    </>
  );
};

export default Header;
