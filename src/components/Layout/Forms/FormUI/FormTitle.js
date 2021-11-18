import styles from "./FormTitle.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../UI/Button";

const FormTitle = (props) => {
  return (
    <div className={styles.title}>
      <h3>{props.children}</h3>
      <div className={styles.xButton}>
        <Button type="xButton" onClick={props.onCloseForm}>
          <FontAwesomeIcon icon={faWindowClose} size="2x" />
        </Button>
      </div>
    </div>
  );
};

export default FormTitle;
