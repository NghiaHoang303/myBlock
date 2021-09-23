import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './navbar.css'
import navbarImg from '../../assets/images/personPositive.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [cats, setCats] = useState([])
    
    useEffect(() => {
        const getCats = async()=> {
            const res = await axios.get('/categories');
            setCats(res.data)
        }
        getCats()
    }, [])
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
                    {
                        cats.map(c => (
                            <Link to = {`/?cat=${c.name}`}>
                            <li className="category-action__life navbar__category-common">
                                {c.name}
                             </li>
                            </Link>
                           
                        ))
                    }
                    </div>
                    {/* <div className="col-6">
                        <a href="" className="category-action__book navbar__category navbar__category-common">
                            Book
                        </a>

                        <a href="" className="category-action__sport navbar__category-common">
                            Sport
                        </a>

                       
                    </div> */}
                   
                </div>
            </div>   
        </div>
    )
}
