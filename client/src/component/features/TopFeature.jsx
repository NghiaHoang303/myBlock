import React from 'react'
import { Button } from 'reactstrap';
import nghiaHoang from '../../assets/images/nghiahoang.png'
import './topFeature.css'

export default function TopFeature() {
    return (
        <div className= 'top-feature row' data-aos="zoom-in-down">
            <div className="col-6 left-feature">
                <div className="topFeaturesInside">
                    <span>TOP FEATURES INSIDE</span>
                </div>

                <div className="growOnline">
                    All you need to grow online
                </div>

                <div className="build-title">
                  Build any blog page you want with included World’s Leading WordPress Page Builder – Elementor.

                </div>
            </div>
            <div className="col-6 right-feature">
                <div className= ''> 
                    <img className='image-feature' src={nghiaHoang} alt="" />
                    <span></span>
                </div>
                <div className="card-icon icon-header" data-aos="zoom-out-left">
                    <i className ="fas fa-heading"></i>
                    <span>Heading</span>
                </div>
                <div className= 'card-icon icon-sub' data-aos="zoom-out-right"> 
                    <i className="far fa-envelope"></i>
                    <span>Subscribe</span>
                </div>
                <div className= 'card-icon icon-posts' data-aos="zoom-out-left">
                    <i className="far fa-plus-square"></i>  
                    <span>Posts</span>
                </div>
                <div className= 'card-icon icon-slider' data-aos="zoom-out-right">
                    <i className="fas fa-bread-slice"></i>
                    <span>Posts slider</span>
                </div>
                <div className= 'card-icon icon-image' data-aos="zoom-out-left">
                    <i className="far fa-images"></i>
                    <span>Image</span>
                </div>

                <div className= 'card-icon icon-logo' data-aos="zoom-out-right">
                    <i class="fas fa-camera-retro"></i>
                    <span>Logo</span>
                </div>
                
            </div>
        </div>
    )
}
