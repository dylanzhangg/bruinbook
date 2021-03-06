import axios from 'axios';
import React, { useState } from 'react'
import './CreatePost.css';
import './global.js'
document.body.style.zoom="100%"


function CreatePost(props) {
    const [caption, setCaption] = useState('')
    const [picture, setPicture] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const create = a => {
        var FormData = require('form-data');
        var form = new FormData();
        form.append("image", picture)
        form.append("content", caption)
        axios.post("http://localhost:3000/accounts/" + global._id + "/posts", form).then(response => props.onSubmit())
        a.preventDefault()
        setSubmitted(true)
    }
    const message = <p className="message">Post Created Successfully!</p>
    const form = 
    <div className="background">
        <form onSubmit={create} className="formarea">
            <h3 className="header">Create Post</h3>
            <br />
            <label htmlFor="picture">Image</label>
            <br />
            <input
                className="input"
                type="file"
                accept = "image/*" required
                onChange = {text => setPicture(text.target.files[0])}
            />
            <br />
            <br />
            <label htmlFor="caption">Caption</label>
            <br />
            <textarea
                className="input"
                name="caption"
                rows="5"
                value = {caption}
                placeholder="Write a caption..." required
                onChange = {text => setCaption(text.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="share">Share</button>
        </form>
    </div>

    return (
        <div>
            {submitted ? message : form}
        </div>
    )
    
}

export default CreatePost
