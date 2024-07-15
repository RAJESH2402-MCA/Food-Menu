import React from "react";

const NavBar = (props) => {
    console.log(props);
    return (
        <>
        <nav className='nav navbar-dark bg-dark navbar-expand-sm'>
      <div className='container'>
        <a href="" className='navbar-brand'>{props.header}</a>
      </div>
    </nav>
        </>
    )
}
export default NavBar;