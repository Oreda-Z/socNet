import {addPost, changeNewText, PostsType} from "../../../redux/propfile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPost());
        },
        updateNewPostText: (text: string) => {
            let action = changeNewText(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;