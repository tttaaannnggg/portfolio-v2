import React from "react";
import NavContainer from "./NavContainer";

const Header = (props) => {
  return (
        <div className='header'>
          <div className='title'>tang</div>
          <NavContainer paths ={['exe', 'img', 'txt', 'etc']} />
        </div>
      )
}

export default Header;
