
import styles from "./HistoryList.module.css";
import HistoryListItem from "./HistoryListItem";

const HistoryList = (props) => {
  const listItems = (
    <tbody className={styles.tbody}>
      {props.raids.map((item, i) => (
        <HistoryListItem
          key={item.id}
          name={item.name}
          number={i}
          date={item.date}
          raidId={item.id}
          onSelectRaid={props.onSelectRaid}
        />
      ))}
      </tbody>
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
     {listItems}
    </table>
  );
};

export default HistoryList;
