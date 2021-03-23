import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, message: 'Hello mazafaka!', likesCount: 2},
                    {id: 2, message: 'Yooo maan wasssap maaaan', likesCount: 23}
                ],
                newPostText: 'it-kama'
            },
        dialogsPage:
            {
                dialogs: [
                    {id: 1, name: 'Dima'},
                    {id: 2, name: 'Vika'},
                    {id: 3, name: 'Aleksey'}
                ],
                messages: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'Wanna have sex?'},
                    {id: 3, message: 'NO'}
                ],
                newMessageBody: ''
            },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}


export default store;

