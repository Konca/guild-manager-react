import styles from "./NavDropdown.module.css"

const NavDropdown = (props)=>{
return <ul className={styles.dropdown}><li>{props.children}
</li></ul>
}

export default NavDropdown;