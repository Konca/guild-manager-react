import PlayerList from "./PlayerList";
import styles from "./RaidLists.module.css";

const RaidLists = (props) => {
  return (
    <div className={styles.raidCards}>
      {props.teams.map((team) => (
        <PlayerList id={team.TeamName} key={team.TeamName} team={team} />
      ))}
    </div>
  );
};

export default RaidLists;
