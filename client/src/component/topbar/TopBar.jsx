import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';


function TopBar(props, event) {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
    return (
        <div className="top">
            
            <div className="topLeft">
                <a href="https://www.facebook.com/nghiengiaycu"> 
                    <i class="topIcon fab fa-facebook-square"></i>
                </a>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-pinterest-square"></i>
                <i class="topIcon fab fa-instagram-square"></i>

            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className="topListItem">
                        <a href="/" >HOME</a>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/new-post" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/register" onClick= {handleLogout}>
                            {user && 'LOGOUT'}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/setting"><img className='topImg' src={PF + user.profilePic}
                    alt='my-image' /></Link>
                ): (
                    <ul className="topList__action-list">
                        <li className="topList__action-item">
                            <a href="/login" className="btn-login">Login</a>
                        </li>
                        <li className="topList__action-item">
                            <a href="/register"  className="btn-register">Register</a>
                        </li>
                    </ul>
                )}
                <i className="topIconSearch fas fa-search"></i>
                
            </div>
        </div>
    )
}

// topBar.propTypes = {

// }

export default TopBar

