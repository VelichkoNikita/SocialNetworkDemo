import {usersAPI2} from "../api/api2";

const FOLLOW2 = 'FOLLOW2';
const UNFOLLOW2 = 'UNFOLLOW2';
const SET_USERS2 = 'SET_USERS2';
const SET_CURRENT_PAGE2 = 'SET_CURRENT_PAGE2';
const SET_TOTAL_USERS_COUNT2 = 'SET_TOTAL_USERS_COUNT2';
const TOGGLE_IS_FETCHING2 = 'TOGGLE_IS_FETCHING2';
const TOGGLE_IS_FOLLOWING_PROGRESS2 = 'TOGGLE_IS_FOLLOWING_PROGRESS2';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW2:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId2) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW2:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId2) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS2: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE2: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT2: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING2: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS2: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }
        }
        default:
            return state;
    }
}

export const follow = (userId2) => ({type: FOLLOW2, userId2});
export const unfollow = (userId2) => ({type: UNFOLLOW2, userId2});
export const setUsers = (users) => ({type: SET_USERS2, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE2, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT2, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING2, isFetching});
export const toggleFollowingProgress2 = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS2,
    isFetching,
    userId
});


export const getUsers2 = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI2.getUsers2_2(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleIsFetching(false))
            });
    }
}

export const follow2 = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress2(true, userId));
        usersAPI2.goFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProgress2(false, userId));
            });

    }
}

export const unfollow2 = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress2(true, userId));
        usersAPI2.notFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress2(false, userId));
            });

    }
}

export default usersReducer2;