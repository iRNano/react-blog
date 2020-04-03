import React, {useState} from "react"

const EditCommentForm = ({comment, setEditingComment, editComment}) => {
    
    const [updatedComment,setUpdatedComment] = useState({
        id: comment.id,
        postId: comment.postId,
        userId: comment.userId,
        body: comment.body
    })

    const onChangeHandler = (e)=>{
        setUpdatedComment({
            ...updatedComment,
            [e.target.name] : e.target.value

        })
    }

    console.log(updatedComment)
    return(
        <div>
            <textarea 
                name="body"
                value={updatedComment.body}
                onChange={onChangeHandler}
            />
            <br />
            <button onClick={()=>{
                editComment(updatedComment)
                setEditingComment(false)
                }
            }>Update</button>
            <button onClick={()=>setEditingComment(false)}>Cancel</button>
        </div>
    )
}

export default EditCommentForm;