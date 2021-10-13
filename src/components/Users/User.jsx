import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {Button_Primary} from "../Button/CSS";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={s.row}>
            <div className={s.col2}>
                <span className={s.margin}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={s.userPhoto}/>
                </NavLink>
                    </span>
                {user.followed
                    ? <Button_Primary
                        mb={"20px"}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>
                        Unfollow
                    </Button_Primary>
                    : <Button_Primary
                        mb={"20px"}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }}>
                        Follow
                    </Button_Primary>}
            </div>
            <div className={s.col}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </div>
        </div>)
}

export default User;