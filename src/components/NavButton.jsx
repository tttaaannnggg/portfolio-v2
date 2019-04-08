import React from "react"

const NavButton = (props)=>{
  return(
    <div className = {props.className}>
      <a href={props.path} className={props.textStyle}>
        {props.path}
      </a>
    </div>
  )
}

export default NavButton;
