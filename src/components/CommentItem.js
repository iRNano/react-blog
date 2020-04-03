import React from "react";


const CommentItem = ({comments, postId})=>{
    
    const showComments = comments.map(comment => {
        if(comment.postId === postId){ 
            return(
                <div key={comment.id}>
                    {/* <small>{comment.id}</small> */}
                    <p>{comment.body}</p>
                    <small>User:{comment.userId}</small>
                    <br />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )
        }
    })
    return(
        <div>
            {showComments}
        </div>
    )
}

export default CommentItem;