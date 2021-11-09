import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import baseURL from '../axiosConfig'
import '../App.css'

function MainPage() {

    const [postList, setPostList] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => {
        baseURL.get("/get")
        .then((data) => {
            console.log(data)
            setPostList(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    

    
    const LikePost = (id) => {
        baseURL.post(`/like/${id}`)
            .then((response) => {
                console.log(response)
                alert("you liked a post")
                getPost()
            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className="MainPage">
            <div className="PostContainer">
                {postList.map((val, key) => {
                    return (
                        <div className="Post" >
                            <h1 className="post-title" onClick={() => (history.push(`/post/${val.id}`))}>{val.title}</h1>
                            <p>{val.post_text.length > 300 ? val.post_text.substring(0, 300) + " ..." : val.post_text}</p>
                            <h4>{val.user_name}</h4>
                            <button className="like_btn" onClick={(() => LikePost(val.id))}>Like</button>

                            <h5>Likes: {val.likes}</h5>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MainPage
