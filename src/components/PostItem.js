import React, {Fragment, useState}from "react";
import EditForm from "./forms/EditForm";

const PostItem = ({post: {title, body,userId, id}, editPost,deletePost}) => {
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
            </div>
        </Fragment>
    )
}

export default PostItem;