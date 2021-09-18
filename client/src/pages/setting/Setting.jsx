import React from 'react'
import Navbar from '../navbar/Navbar'
import './setting.css'
import avatar from '../../assets/images/vinhHaLong.jpg'

export default function Setting() {
    return (
        <div className="setting row">
            <div className="col-9">
                <div className="setting__avatar">
                    <img src={avatar} alt="" className="setting_avatar-img" />
                    <i class="fas fa-user-circle setting__avatar-icon"></i>
                </div>

                <div className="setting__form">
                    <form className="">
                        <div class="form-group">
                            <label for="exampleInputEmail1">User name</label>
                            <input type="email" class=" setting__input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="setting__input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="setting__input" id="exampleInputPassword1"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-dark">Update</button>

                    </form>
                </div>
            </div>
            
            {/* <div className="col-3"></div> */}
            <Navbar/>
        </div>
    )
}
