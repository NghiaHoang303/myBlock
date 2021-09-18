import React from 'react'
import './newPost.css'
import newPostImage from '../../assets/images/vinhHaLong.jpg'
export default function NewPost() {
    return (
        <div className="newPost">
            <div className="newPost__header">
                <img src= {newPostImage} alt="" className="newPost__img" />
            </div>

            <div className="newPost__form  from-group">
                <label htmlFor="fileInput" className="newPost__button">
                    <i class="fas fa-plus-circle"></i> 
                </label>
                <input type="file" id='fileInput' style = {{display: 'none'}}/>
                <div className="form-group">
                    <input className='inputnewPost' placeholder="enter ..."></input>
                </div>
                <div className="form-group">
                    <input className='inputnewPost' placeholder="enter ..."></input>
                </div>
                
            </div>

            <div className="newPost__publish-btn">
                <button className=" btn btn-info">Publish</button>
            </div>
        </div>
    )
}
