import styles from "./Form.module.css";
import FormTitle from "./FormTitle";
import Modal from "../../../UI/Modal";
import FormFooter from "./FormFooter";

const Form = (props) => {
  return (
    <Modal onClick={props.onCloseForm}>
      <form onSubmit={props.onSubmit}>
        <FormTitle onCloseForm={props.onCloseForm} >{props.formTitle}</FormTitle>
        <div className={styles.content}>{props.children}</div>
        <FormFooter onCloseForm={props.onCloseForm} isFormValid={props.isFormValid} />
      </form>
    </Modal>
  );
};

export default Form;
