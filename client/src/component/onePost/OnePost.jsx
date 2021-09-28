import React from 'react'
import nike from '../../assets/images/nike1.jpg'
import './onePost.css'
import {Link} from 'react-router-dom'

export default function OnePost({post}) {

    console.log('post',post);
    const PF = "http://localhost:5000/images/"
    return (
        <div>
            <div className="col-4 show__right-item">
                <div className="card " style={{width: '22rem'}}>
                        {post.photo && (
                            <img src={PF + post.photo} className="card-img-top" alt="..."/>
                        )}
                        
                        <div className="card-body">
                            <div className="postCats">
                                {post.categories.map((c) => {
                                        <span>{c.name}</span>
                                  
                                })} 
                            </div>
                            <Link to={`/post/${post._id}`}>
                                <h5 className="card-title">{post.title}</h5>
                                <h6>{post.codeProduct}</h6>
                            </Link>
                            <span className="card-date">{new Date(post.createdAt).toDateString()}</span>
                            
                            <div className= "d-flex justify-content-between">
                                <p>Price :{post.price}</p>
                                <p>Size: {post.size}</p>
                            </div>
                            <p className="card-text card-description">{post.desc}</p>
                        
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                </div>
        </div>
    )
}
