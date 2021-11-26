import styles from "./PlayerListItem.module.css";
import { Draggable } from "react-beautiful-dnd";
import { useContext } from "react";
import CsvReader from "../../Context/csv-reader";

const PlayerListItem = (props) => {
  const csvCtx=useContext(CsvReader)
  return (
    <Draggable draggableId={props.id} index={props.index} isDragDisabled={csvCtx.isDragDisabled}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${styles.player} ${styles[props.role]} ${
            styles[props.class]
          } ${styles[props.spec]} ${styles[props.status]} ${
            styles[props.gRank]
          }`}
          id={props.id}
        >
          <span className={styles.specIcon}></span>
          {props.name}
          <span className={styles.statusIcon}></span>
          <span className={styles.rankIcon}></span>
        </li>
      )}
    </Draggable>
  );
};

export default PlayerListItem;
