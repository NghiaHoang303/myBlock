import React, {useState, useEffect, useContext} from 'react'
import './post.css'
import postImg from '../../assets/images/caoBang.jpeg'
import Navbar from '../navbar/Navbar'
import {useLocation} from 'react-router'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';

export default function Post() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const {user} = useContext(Context)
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async() => {
            const res  = await axios.get('/posts/' + path);
            setPost(res.data)
            setTitle(res.data.title);
            setDesc(res.data.desc)
            // console.log([path])
        }
      getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { 
                data: {username: user.username},
            });
            window.location.replace('/');
            
        } catch (error) {
            
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title, desc
            });
            // window.location.reload()
            setUpdateMode(false)
        } catch (error) {
            
        }
    }

    return (
        <div className="post row">
            <div className="col-9">
                <div className="post__header">
                    {
                        post.photo && (
                            <img src= {PF + post.photo} alt="" className="post__header-img" />
                        )
                    }
                </div>
                
                <div className="post__content">
                    <div className="post__content-description row">
                        {updateMode ? <input className= "singlePostTitleInput" value = {title} 
                        onChange = {e => setTitle(e.target.value) }
                        autoFocus
                        /> :(
                    <div className = "row">
                        <div className="post__content-name col-11">
                        {title}
                        </div>
                        <div className="post__content-function col-1">

                            {post.username === user?.username && (
                                <div className="post__content-function col-1 ">
                                    <div className="post__content-function-plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <div className="post__content-function-edit"
                                    onClick = {() => setUpdateMode(true)}
                                    >
                                        <i class="far fa-edit"></i>
                                    </div>
                                    <div className="post__content-function-remove">
                                        <i class="far fa-trash-alt" onClick= {handleDelete}></i>
                                    </div>
                                </div>
                            )}
                        </div>
                      
                      </div>

                        ) }
                    </div>
                    <div className="post__content-info">
                        
                        <div className="post__content-info-author">
                        Author:
                            <Link to={`/?user=${post.username}`}> 
                                 {post.username}
                            </Link>
                        </div>

                        <div className="post__content-info-time">
                            {new Date(post.createdAt).toDateString()}
                        </div>  
                    </div>
                    {updateMode ? 
                    <>
                         <textarea className= "post__content-main-single" value= {desc}
                         onChange = {(e) => setDesc(e.target.value)}
                         />
                         <button className="singlePostButton btn btn-info" onClick = {handleUpdate}>
                            Update
                        </button>
                    </>: (
                    <div className="post__content-main">
                        {desc}
                    </div>

                    
                    )}

                    
                </div>
            </div>
            <Navbar/>
        </div>
    )
}
