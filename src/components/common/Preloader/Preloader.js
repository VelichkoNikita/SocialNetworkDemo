import React from 'react';
import s from "../../Users/users.module.css";
import preloader from "../../../assets/images/5.gif";

let Preloader = (props) => {
    return <img className={s.preloader} src={preloader}/>
}

export default Preloader;