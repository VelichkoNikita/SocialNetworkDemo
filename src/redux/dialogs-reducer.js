const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Aleksey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Wanna have sex?'},
        {id: 3, message: 'NO'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;