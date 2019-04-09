import React from "react";
import { Link } from "gatsby";

const NavButton = (props)=>{
  return(
    <div className = {props.className}>
      <Link to={props.path} className={props.textStyle}>
        {props.path}
      </Link>
    </div>
  )
}

export default NavButton;
