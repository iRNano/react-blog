import React, {useState} from "react";


const EditForm = ({setEditing,title,body, postId, editPost}) => {
    const [formData, setFormData] = useState({
        id:postId,
        title,
        body
    })
    const onChangeHandler = (e)=>{
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <h2>Editing</h2>
            <label>Title</label>
            <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
            />
            <br />
            <label>Body</label>
            <input 
                type="text"
                name="body"
                value={formData.body}
                onChange={onChangeHandler}
            />
            <br />
            <button 
            onClick={()=>{
                editPost(formData)
                setEditing(false)}
                }>
                Submit
            </button>
            <button onClick={()=>setEditing(false)}>Cancel</button>
        </div>
    )
}

export default EditForm;