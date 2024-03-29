import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {Button_Primary} from "../../Button/CSS";
import {v4 as uuidv4} from "uuid"

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={uuidv4()} message={p.message} likesCount={p.likesCount}/>);


    let addAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name="newPostText" placeholder='Enter your post'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Button_Primary mt={"6px"} mtXs={"8px"} mbXs={"8px"}>Add post</Button_Primary>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "dialogAddPostForm"})(AddPostForm)

export default MyPosts;

