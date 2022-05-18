import React from 'react';
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={`${s.item}  ${s.active}`}>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings">Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;