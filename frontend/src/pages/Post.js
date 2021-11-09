import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import baseURL from '../axiosConfig'
import '../App.css'

export default function Post() {

    let { postId } = useParams();
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("");

    useEffect(() => {
        baseURL.get(`/getFromId/${postId}`)
            .then((data) => {
                console.log(data)
                setPost({
                    title: data.data[0].title,
                    postText: data.data[0].post_text,
                    userName: data.data[0].user_name,
                    id: data.data[0].id
                });
            }).catch((err) => {
                console.log(err)
            })
    }, [postId]);


    const deletePost = (id) => {
        baseURL.delete(`/delete/${postId}`)
            .then((response) => {
                console.log(response)
                alert("you deleted a post")
            }).catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="Post individual">
            <h1 className="post-title">{post.title}</h1>
            <p>{post.postText}</p>
            <h4>{post.userName}</h4>
            <button onClick={(() => deletePost(post.id))}>X</button>

        </div>
    )
}
