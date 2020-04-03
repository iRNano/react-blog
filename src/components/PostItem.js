import React, {Fragment, useState}from "react";
import EditForm from "./forms/EditForm";
import CommentForm from "./forms/CommentForm";
import CommentItem from "./CommentItem";

const PostItem = ({post: {title, body,userId, id}, editPost,deletePost, addComment,comments,editComment,deleteComment}) => {
    const style = {
        background: "#eee",
        padding: "10px",
        marginBottom: "10px",
        border: "2px solid black"
    }

    const [editing, setEditing] = useState(false)
    return(
        <Fragment>
            <div style = {style}>               
                {editing? 
                    //edit form props
                    <EditForm 
                        editPost={editPost}
                        deletePost={deletePost} 
                        title={title} 
                        postId={id}
                        body={body}
                        setEditing={setEditing}
                    />: 
                    <Fragment>
                        <small>{id}</small>
                        <h2>{title}</h2>
                        <p>{body}</p>
                        <small>Posted by: {userId}</small>
                        <button onClick={()=>setEditing(true)}>Edit</button> 
                        <button onClick={()=>deletePost(id)}>Delete</button>
                    </Fragment>
                }                           
                <CommentItem comments={comments} postId={id} editComment={editComment} deleteComment={deleteComment}/>
                <CommentForm postId={id} addComment={addComment} />  
            </div>
        </Fragment>
    )
}

export default PostItem;