import styles from "./HistoryListItem.module.css";
const HistoryListItem = (props) => {
  return (
      <tr className={styles.tableRow}>
          <td>
          <input
            key={`historyradioButton${props.number}`}
            type="radio"
            name="radioButton"
            id={props.raidId}
            onClick={props.onSelectRaid}
            className={styles.checkInput}
          />
          <label htmlFor={`historyradioButton${props.number}`} className={styles.radioLabel}>
            {props.name}
          </label>
      </td>
      <td>{props.date}</td>
      <td>{props.raidId}</td>
      </tr>
  );
};

export default HistoryListItem;
