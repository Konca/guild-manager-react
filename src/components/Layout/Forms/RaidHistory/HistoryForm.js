import styles from "./HistoryForm.module.css";
import { useEffect, useState, useCallback } from "react";
import HistoryList from "./HistoryList";
import Form from "../FormUI/Form";
import Button from "../../../UI/Button";
import { useHistory } from "react-router";

const HistoryForm = (props) => {
  const [raids, setRaids] = useState([]);
  const [selectedRaid, setSelectedRaid] = useState("");
  const [raidLink, setRaidLink] = useState("");
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();
  const fetchRaidHistory = useCallback(async () => {
    const response = await fetch("../../../../dummy/RHO-Raid_History.json");
    const data = await response.json();
    const transformedRaids = data.raids.map((raidData) => {
      return { name: raidData.Name, date: raidData.Date, id: raidData.ID };
    });
    setRaids(transformedRaids);
  }, []);

  useEffect(() => {
    fetchRaidHistory();
  }, [fetchRaidHistory]);
  useEffect(() => {
    setIsValid(selectedRaid !== "");
  }, [selectedRaid]);
  const raidSelecterHandler = (event) => {
    setSelectedRaid(event.target.id);
  };
  const formSubmitHandler = (event) => {
    history.push("/RaidBuilder/RHO/" + selectedRaid);
    event.preventDefault();
    props.onCloseForm();
  };
  const getLinkHandler = () => {
    setRaidLink(window.location.host + "/RaidBuilder/RHO/" + selectedRaid);
  };
  return (
    <Form
      formTitle="Open an existing Raid"
      onCloseForm={props.onCloseForm}
      onSubmit={formSubmitHandler}
      isFormValid={isValid}
    >
      <label>Select a raid from the list:</label>
      <div className={styles.tableContainer}>
        <HistoryList onSelectRaid={raidSelecterHandler} raids={raids} />
      </div>
      <div className={styles.linkWrapper}>
        <input readOnly value={raidLink} className={styles.linkForRaid}></input>
        <div className={styles.buttonWrapper}>
          <Button type="button" disabled={!isValid} onClick={getLinkHandler}>
            Get Link
          </Button>
        </div>
      </div>
    </Form>
  );
};
export default HistoryForm;
