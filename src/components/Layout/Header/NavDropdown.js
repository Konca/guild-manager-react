import classes from "./NavDropdown.module.css"

const NavDropdown = (props)=>{
return <ul className={classes.dropdown}>{props.children}
<li>fafa</li></ul>
}

export default NavDropdown;