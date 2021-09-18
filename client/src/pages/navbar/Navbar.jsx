import React from 'react'
import './navbar.css'
import navbarImg from '../../assets/images/personPositive.jpg'
export default function Navbar() {
    return (
        <div className= 'navbar col-3'>
            <div className="navbar__about"> 
                <div className= 'navbar__about-name'>
                    ABOUT ME
                </div>
                
                <div className="">
                    <img src={navbarImg} alt="" className="navbar__img" />
                </div>

                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Molestias modi repellendus nostrum, labore sed enim facilis quod corrupti, 
                    explicabo autem aperiam suscipit quia! Quibusdam, autem?
                    Quidem et doloremque praesentium cupiditate?
                </span>
                
            </div>

            <div className="navbar__category">
                <div className="navbar__category-name"> 
                    CATEGORY
                </div>    
                
                <div className="navbar__category-action row">
                    <div className="col-6">
                        <a href="" className="category-action__life navbar__category-common">
                            Life
                        </a>

                        <a href="" className="category-action__music navbar__category-common">
                            Music
                        </a>

                        <a href="" className="category-action__style navbar__category-common">
                            Style
                         </a>
                    </div>
                    <div className="col-6">
                        <a href="" className="category-action__book navbar__category navbar__category-common">
                            Book
                        </a>

                        <a href="" className="category-action__sport navbar__category-common">
                            Sport
                        </a>

                       
                    </div>
                   
                </div>
            </div>   
        </div>
    )
}
