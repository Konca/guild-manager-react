import styles from "./FormFooter.module.css"
import Button from "../../../UI/Button";

const FormFooter = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.buttons}>
          <Button type="close" onClick={props.onCloseForm}>
            Close
          </Button>
        </div>
        <div className={styles.buttons}>
          <Button disabled={!props.isFormValid} type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FormFooter