const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Aleksey'}
    ],
    messages: [
        {id: 11, message: 'Hi'},
        {id: 22, message: 'Wanna have fun?'},
        {id: 33, message: 'NO'}
    ]
};


// let index = [];
// for (let i = 4; i <= 99; i++) {
//     index.push(i);
// }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;