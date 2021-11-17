import classes from "./NavDropdown.module.css"

const NavDropdown = (props)=>{
return <ul className={classes.dropdown}><li>{props.children}
</li></ul>
}

export default NavDropdown;