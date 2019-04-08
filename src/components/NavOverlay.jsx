import React from "react";
import NavButton from "./NavButton";

// expect main body component as prop
// will wrap the component in navigation

const NavOverlay = (props) =>{
  return(
      <div>
        <NavButton className='nav__link nav__link--top' textStyle='nav__link--text' path='exe' />

        <div className='container__whole'>
          <NavButton className='nav__link nav__link--left' textStyle='nav__link--text' path='txt' />

          <NavButton className='nav__link nav__link--right' textStyle='nav__link--text' path='img'/>
        </div>

        <NavButton className='nav__link nav__link--bot' textStyle='nav__link--text' path='about' />
      </div>
  )
}

export default NavOverlay;
