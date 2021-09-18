import React from 'react'
import './everythingBlog.css'
import professionally from '../../assets/images/professionally-designed.jpg'
import sellAnything from '../../assets/images/sell-anything.jpg'
import postStyle from '../../assets/images/beautifull-posts-styles.jpg'
import headerBuilder from '../../assets/images/header-builder.jpg'

export default function EverythingBlog() {
    return (
        <div className="everythingBlog__body ">
             <div className="everythingBlog__title " 
             data-aos="fade-up"
             data-aos-duration="3000">
                Everything you need to start your blog.
             </div>
                <ul className="everythingBlog__list row">
                    <li className="everythingBlog__item col-6" 
                    data-aos="fade-up"
                    data-aos-duration="3000">
                        <img className = 'everythingBlog__image' src={professionally} alt="" />
                    </li>

                    <li className="everythingBlog__item col-6"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    >
                        <img className = 'everythingBlog__image' src={sellAnything} alt="" />
                    </li>
                    
                </ul>
                <ul className="everythingBlog__list row">
                    <li className="everythingBlog__item col-6"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    >
                        <img className = 'everythingBlog__image ' src={postStyle} alt="" />
                    </li>

                    <li className="everythingBlog__item col-6"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    >
                        <img className = 'everythingBlog__image image-headerBuilder' src={headerBuilder} alt="" />
                    </li>
                    
                </ul>
                
            </div>
    )
}
