import React from 'react';
import myImg from "../../logo512.png";
import style from './Header.module.css';
const Header = () => {
    return (
        <header className={style.Plox}>
            <img  src={myImg} alt=""/>
        </header>
    );
};

export default Header;