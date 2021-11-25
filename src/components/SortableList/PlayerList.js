import styles from "./PlayerList.module.css";
import PlayerListItem from "./PlayerListItem";
import { Droppable } from "react-beautiful-dnd";
const PlayerList = (props) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.listTitle}>
        <p>{props.team.TeamName}</p>
        <span>{props.team.TeamComp.length || 0}</span>
      </div>
      <Droppable droppableId={props.id}>
        {(provided) => (
          <ul className={styles.playerList}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {props.team.TeamComp.length > 0
              ? props.team.TeamComp.map((player, index) => (
                  <PlayerListItem
                    index={index}
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
              {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default PlayerList;
