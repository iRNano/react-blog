import React, {useState} from "react";

const CommentForm = ({addComment,postId}) => {
    const [comment,setComment] = useState("");

    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }
    return(
        <div>
            Comment from
            <br />
            <textarea
                placeholder="Write your comment..."
                onChange={onChangeHandler}

            />
            <br />
            {/* <p>{comment}</p> */}
            <button onClick={()=>addComment(postId,comment)}>Comment</button>
        </div>
    )
}

export default CommentForm;