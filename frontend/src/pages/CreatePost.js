import React, { useState, useEffect } from 'react';
import axiosConfig from '../axiosConfig'
import '../App.css'

function CreatePost() {
    const [userName, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const submitPost = () => {
        axiosConfig.post('/create', { userName: userName, title: title, text: text })
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="CreatePost">
            <div className="uploadPost">

                <label>Username: </label>
                <input type="text" onChange={(e) => {
                    setUserName(e.target.value)
                }} />

                <label>Title: </label>
                <input type="text" onChange={(e) => {
                    setTitle(e.target.value)
                }} />

                <label>Post Text</label>
                <textarea
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                ></textarea>

                <button onClick={submitPost}>Submit Post</button>

            </div>
        </div>
    )
}

export default CreatePost
