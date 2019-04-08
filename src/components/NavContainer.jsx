import React from "react";
import NavButton from './NavButton';

const NavContainer = (props)=>{
  const navArr = [];
  props.paths.forEach((path, i)=>{
          if(i > 0 && i < props.paths.length){
            navArr.push(' / ')
          }
          navArr.push(<NavButton path={path}/>);
        }
      )
  return(
    <nav class='navButtons'>
      {navArr}
    </nav>
  )
}

export default NavContainer;
