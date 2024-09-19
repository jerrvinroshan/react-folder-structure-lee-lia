import React from "react";
import { Outlet, NavLink} from "react-router-dom";
import logo from "./brand/Lee&LiaWhitelogo.png";
import './Navbar.css'
import '../../pages'

function NavBar() {
  return (
    <>
      <nav className="BgColor">
        <div className="NavBarMenu">
          <img className="LogoImg" src={logo} alt="logo"/>
          <ul className="NavBarList">
            <li className="NavBarItem">
              <NavLink activeClassName='active' exact to="/" className="NavBarLink">Home</NavLink>
            </li>
            <li className="NavBarItem">
              <NavLink to="/business" className="NavBarLink">Business</NavLink>
            </li>
            <li className="NavBarItem">
              <NavLink to="/career" className="NavBarLink">Careers</NavLink>
            </li>
            <li className="NavBarItem">
              <NavLink to="/newsroom" className="NavBarLink">Newsroom</NavLink>
            </li>
            <li className="NavBarItem">
              <NavLink to="/location" className="NavBarLink">Location</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    <Outlet/>

    </>
  );
}

export default NavBar;
