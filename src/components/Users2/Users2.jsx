import React from 'react';
import s from "../Users/users.module.css";
import userPhoto from '../../assets/images/user.png'


let Users2 = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged2(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/></div>
                    <div> {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow2(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow2(u.id)
                        }}>Follow</button>}
                            </div>
                            </span>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)
        }
    </div>
}


export default Users2;