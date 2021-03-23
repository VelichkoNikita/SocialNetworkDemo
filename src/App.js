import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import Users2Container from "./components/Users2/Users2Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspence} from "./hoc/withSuspence";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path='/profile/:userId?' render={withSuspence(ProfileContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/users2' render={() => <Users2Container/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;