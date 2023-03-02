import React from 'react';
import myImg from "../../logo512.png";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.main}>
            <div>
               <img  src={myImg}  className={style.navLogo} alt=""/>
            </div>
            <div>
            {props.isAuth?
                <div>{props.login}   <NavLink onClick={()=>props.logout()}>logout   </NavLink> </div>
                :
                <NavLink  to={'/login'}>login</NavLink>
            }
            </div>
        </header>
    );
};

export default Header;