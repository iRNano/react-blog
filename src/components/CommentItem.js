import React, {useState} from "react";
import EditCommentForm from "./forms/EditCommetForm";


const CommentItem = ({comments, postId,editComment,deleteComment})=>{

    const [editingComment, setEditingComment] = useState({
        commentId: null,
        edit:false
    });
    
    const style = {
        border: "2px solid black"
    }

    const showComments = comments.map(comment => {
        if(comment.postId === postId){ 
            return(
                <div style={style} key={comment.id}>
                    <br />
                    {editingComment.edit && editingComment.commentId == comment.id? 
                        //Edit Comment Form Props
                        <EditCommentForm 
                            comment={comment}
                            body={comment.body} 
                            commentId={comment.id}
                            setEditingComment={setEditingComment}
                            editComment={editComment}
                        / >
                        :
                            <div>
                                <p>{comment.body}</p> 
                                <button onClick={() => setEditingComment({commentId: comment.id, edit:true})} >Edit</button>
                                <button onClick={() => deleteComment(comment.id)}>Delete</button>  
                            </div>
                    }                   
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