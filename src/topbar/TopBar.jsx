import React from 'react'
import PropTypes from 'prop-types'
import './topbar.css'

function TopBar(props) {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcon fab fa-facebook-square"></i>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-pinterest-square"></i>
                <i class="topIcon fab fa-instagram-square"></i>

            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGO</li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src='https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-9/30652335_2131096027123903_2104053046077030400_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rljraiPyA5AAX9u6B2M&tn=sL0k8ps0EhJ05wno&_nc_ht=scontent.fdad1-1.fna&oh=e55092b4a7ae13f83f274bafb37cde02&oe=6162B4B0'
                    alt='my-image' />
                <i className="topIconSearch fas fa-search"></i>
            </div>
        </div>
    )
}

// topBar.propTypes = {

// }

export default TopBar

