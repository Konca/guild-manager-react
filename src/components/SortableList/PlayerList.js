import styles from "./PlayerList.module.css";
import PlayerListItem from "./PlayerListItem";
const PlayerList = (props) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.listTitle}>
        <p>{props.team.TeamName}</p>
        <span>{props.team.TeamComp.length || 0}</span>
      </div>
      <ul className={styles.playerList}>
        {props.team.TeamComp.length > 0
          ? props.team.TeamComp.map((player) => (
              <PlayerListItem
                key={player.ID}
                id={player.ID}
                role={player.Role}
                class={player.Class}
                spec={player.Spec}
                status={player.Status}
                gRank={player.Rank}
                name={player.Name}
              />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default PlayerList;
