import React from 'react';
import myImg from "../../logo512.png";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.Plox}>
            <img  src={myImg} alt=""/>
            {props.isAuth?
               "":
                <NavLink to={'/login'}>login</NavLink>
            }
        </header>
    );
};

export default Header;