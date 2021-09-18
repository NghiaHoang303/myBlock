import React from 'react'
import './about.css'
import nghiahoang from '../../assets/images/nghiaNgao.jpg'

export default function About() {
    return (
        <>
        <div className='about'>
            <div className="about__content row">
                <div className="col-6 about__content-left">
                    <img className= 'about__content-img' src={nghiahoang} alt="" />

                </div>

                <div className="col-6 about__content-right">
                    <div className="about__content-title">
                        Hi, It's me Nghia Hoang
                    </div>

                    <div className="about__content-description">
                    I moved to NYC as a teenager and as a small town girl from Michigan,
                    I instantly fell in love with the hustle and bustle of the city. 
                    Fast forward to my university years, I ended up getting locked in at the campus coffee shop 
                    (a really long story) and my future husband saved me from spending the night sleeping behind the cashier. 
                    His heroism was rewarded with a date (not in the same coffee shop), and we ended up tying the knot
                    a few years later. A year into our marriage, we found ourselves expecting Rebecca. 
                    This blog started as a maternity leave hobby of mine, but has since grown into a diary
                     of our daily lives, with its ups and downs.
                    </div>
                </div>
            </div>
        </div>

        <div className="letCollab">
            <span className="letCollab__title">
                Let's collab!
            </span>

            <a href="/contact" className=' btn-contact'>
                CONTACT
            </a>
        </div>
        </>

        
    )
}
