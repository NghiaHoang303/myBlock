import React, { useContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './setting.css'
import avatar from '../../assets/images/vinhHaLong.jpg'
import {Context} from '../../context/Context'
import axios from 'axios'

export default function Setting() {
    const {user, dispatch} = useContext(Context)
    const [file, setFile] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const PF = "http://localhost:5000/images/";
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_START'})
        const updateUser = {
           userId : user._id,
            username, email, password
        }

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
            } catch (error) { }
        }

        try {
           const res= await axios.put("/users/"+ user._id, updateUser);
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data})
        } catch (error) {
            dispatch({type: "UPDATE_FAILURE" })
        }
    }

    // console.log(user)
    return (
        <div className="setting row">
            <div className="col-9">
            <div className="settingsTitle">
                <span>Update your account</span>
                <span>Delete account</span>
            </div>
                <form className="" onSubmit= {handleSubmit}>
                    <div className="setting__avatar">
                        <img src= {file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" className="setting_avatar-img" />
                        <label htmlFor ="fileInput">
                            <i class="fas fa-user-circle setting__avatar-icon"></i>
                        </label>
                        <input type="file" id='fileInput' style = {{display: 'none'}}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    </div>

                    <div className="setting__form">
                            <div class="form-group">
                                <label for="exampleInputEmail1">User name</label>
                                <input type="text" class=" setting__input" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder ={user.username}
                                    onChange= {e => setUsername(e.target.value)}
                                />
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="setting__input" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder= {user.email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                            
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="setting__input" id="exampleInputPassword1"
                                    placeholder = "abc123"
                                    onChange = {e => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-dark" type= "submit">Update</button>
                            {success && (
                                <span style={{color: "green", textAlign: "center"}} className="ml-5" >
                                    Update profile is successful :D 
                                </span> 
                            )}
                    </div>
                </form>
            </div>
            
            {/* <div className="col-3"></div> */}
            <Navbar/>
        </div>
    )
}
