import React from 'react'
import storyBg from '../../assets/images/story-bg1.jpg'
import book from '../../assets/images/book.jpg'
import bookEnglish from '../../assets/images/englishBook.jpg'
import schedule from '../../assets/images/schedule.jpg'
import Inspire from '../../assets/images/inspire.jpg'
import family from '../../assets/images/family.jpg'
import './stunningDesign.css'

export default function StunningDesign() {
    return (
        <div className="stunning-design">
            <div className="stunning-design__title">
                <div className="stunning-design__title-Lg " data-aos="zoom-in-right">
                    Stunning Designs
                </div>
                <div className="stunning-design__title-Sm" data-aos="zoom-in-right">
                    Get started with any of our best-in-class designs and customize it as you wish.
                </div>
            </div>

            <div className="stunning-design__body ">
                <ul className="stunning-design__list row">
                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <a href="/my-story"><img className = 'stunning-design__image active' src={storyBg} alt="" /></a>
                        <span>My Story</span>
                    </li>

                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <img className = 'stunning-design__image active' src={schedule} alt="" />
                        <span>Schedule</span>
                    </li>
 
                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <img className = 'stunning-design__image active' src={book} alt="" />
                        <span>Book library</span>
                    </li>


                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <img className = 'stunning-design__image active' src={bookEnglish} alt="" />
                        <span>English Book</span>
                    </li>

                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <img className = 'stunning-design__image' src={Inspire} alt="" />
                        <span>Inspire</span>
                    </li>

                    <li className="stunning-design__item col-4"  data-aos="zoom-out-left">
                        <img className = 'stunning-design__image' src={family} alt="" />
                        <span>My family</span>
                    </li>
                </ul>
            </div>

            {/* <div className="stunning-design__body row">

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                <  img className = 'stunning-design__image' src={storyBg} alt="" />
                    <div className="card-body">
                        <p className="card-text">My Story</p>
                    </div>
                </div>

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                    <img className = 'stunning-design__image' src={book} alt="" />
                    <div className="card-body">
                        <p className="card-text">Book</p>
                    </div>
                </div>

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                <img className = 'stunning-design__image' src={bookEnglish} alt="" />
                    <div className="card-body">
                        <p className="card-text">Book english</p>
                    </div>
                </div>

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                    <img className = 'stunning-design__image' src={Inspire} alt="" />
                        <div className="card-body">
                            <p className="card-text">Inspire</p>
                        </div>
                </div>

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                <img className = 'stunning-design__image' src={family} alt="" />
                    <div className="card-body">
                        <p className="card-text">My Story</p>
                    </div>
                </div>

                <div className="card col-4 stunning-design__item" style={{width: '8rem'}}>
                <img className = 'stunning-design__image' src={schedule} alt="" />
                    <div className="card-body">
                        <p className="card-text">Schedule</p>
                    </div>
                </div>

            
            </div> */}
               
        </div>
    )
}
