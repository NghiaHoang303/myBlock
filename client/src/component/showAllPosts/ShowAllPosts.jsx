import React from 'react'
import Navbar from '../../pages/navbar/Navbar'
import nike from '../../assets/images/nike1.jpg'
import './showAllPosts.css'
import OnePost from '../onePost/OnePost'
export default function ShowAllPosts({posts}) {
    

    return (
        <div className="show row  " >
            <div className="show__right col-9">
                <div className="row show__right-list">
                    {posts.map((p) => (
                        <OnePost post= {p}/>
                    ))}
                    
                </div>
            </div>
            <Navbar/>
        </div>
    )
}
