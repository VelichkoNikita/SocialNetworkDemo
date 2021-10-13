import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Button_Primary} from "../Button/CSS";
import {v4 as uuidv4} from "uuid"

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}  key={uuidv4()} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}  key={uuidv4()}/>);
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>
    const maxLength50 = maxLengthCreator(50);

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextArea}
                           validate={[required, maxLength50]}
                           name="newMessageBody"
                           placeholder='Enter your message'/>
                </div>
                <div>
                    <Button_Primary mt={"6px"} mtXs={"10px"}>Send</Button_Primary>
                </div>
            </form>
        )
    }

    const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;