import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button_Primary} from "../Button/CSS";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://img2.freepng.ru/20180406/xgq/kisspng-logo-c-letter-letter-c-5ac700f5a7ff30.0580812215229913496881.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <Button_Primary onClick={props.logout}>Log out</Button_Primary></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;