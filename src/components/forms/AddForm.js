import React, { useState } from "react";

const AddForm = ({addPost}) => {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            addPost(formData)
            }}>
            {JSON.stringify(formData)}
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id = "title"
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                id = "body"
                name="body"
                value={formData.body}
                onChange={onChangeHandler}
            />
            <button>Submit</button>
        </form>

    )
}

export default AddForm;