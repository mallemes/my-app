import React from 'react';
import {NavLink} from "react-router-dom";
import style from './MyNav.module.css';

const MyNav = () => {
    return (
        <nav className={style.myNav}>
            <div className={style.item}><NavLink  to='/profile'  className={({ isActive }) =>
                isActive ? style.active : style.item}>Profile</NavLink></div>
            <div className={style.item}><NavLink to="/dialogs"  className={({ isActive }) =>
                isActive ? style.active : style.item} >Message</NavLink></div>
            <div className={style.item}><NavLink to="/users"  className={({ isActive }) =>
                isActive ? style.active : style.item} >users</NavLink></div>
            <div className={style.item}>News</div>
            <div className={style.item}>Music</div>
            <br/>
            <div className={style.item}>Settings</div>
        </nav>
    );
};

export default MyNav;