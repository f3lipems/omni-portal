import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {

    const isActive = "nav-link " + props.active

    return(
        <li className="nav-item"><Link  className={isActive} to={props.reference}>{props.name}
        {props.current}
        </Link></li>
    );
}

export default NavItem;
