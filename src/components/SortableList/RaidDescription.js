import styles from "./RaidDescription.module.css";

const RaidDescription = (props) => {
  const content =
    props.raidInfo !== undefined ? (
      <>
        <h3>{props.raidInfo.Name}</h3>
        <p>{props.raidInfo.Description}</p>
        <p>
          Starting on:&nbsp;{props.raidInfo.Date}&nbsp;/&nbsp;
          {props.raidInfo.Time}&nbsp;server time.
        </p>
      </>
    ) : (
      props.children
    );

  return <div className={styles.raidInfo}>{content}</div>;
};

export default RaidDescription;
