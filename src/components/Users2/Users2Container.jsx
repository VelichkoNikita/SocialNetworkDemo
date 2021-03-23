import React from 'react';
import {connect} from "react-redux";
import Users2 from "../Users2/Users2";
import {
    follow2, getUsers2,
    setCurrentPage, toggleFollowingProgress2,
    unfollow2
} from "../../redux/users2-reducer";
import Preloader from "../common/Preloader/Preloader"


class UsersContainer2 extends React.Component {
    componentDidMount() {
        this.props.getUsers2(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged2 = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers2(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users2 totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow2={this.props.unfollow2}
                    follow2={this.props.follow2}
                    onPageChanged2={this.onPageChanged2}
                    followingInProgress={this.props.followingInProgress}
                // toggleFollowingProgress2={this.props.toggleFollowingProgress2}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage2.users,
        pageSize: state.usersPage2.pageSize,
        totalUsersCount: state.usersPage2.totalUsersCount,
        currentPage: state.usersPage2.currentPage,
        isFetching: state.usersPage2.isFetching,
        followingInProgress: state.usersPage2.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow2,
    unfollow2,
    setCurrentPage,
    toggleFollowingProgress2,
    getUsers2
})(UsersContainer2);


