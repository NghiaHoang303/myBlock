import React from 'react'
import './post.css'
import postImg from '../../assets/images/caoBang.jpeg'
import Navbar from '../navbar/Navbar'
export default function Post() {
    return (
        <div className="post row">
            <div className="col-9">
                <div className="post__header">
                    <img src= {postImg} alt="" className="post__header-img" />
                </div>
                
                <div className="post__content">
                    <div className="post__content-description row">
                        <div className="post__content-name col-11">
                            Lorem ipsum dolor sit amet, consectetur adip
                        </div>
                        <div className="post__content-function col-1">
                            <div className="post__content-function-plus">
                                <i class="fas fa-plus"></i>
                            </div>
                            <div className="post__content-function-edit">
                                <i class="far fa-edit"></i>
                            </div>
                            <div className="post__content-function-remove">
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="post__content-info">
                        <div className="post__content-info-author">
                            Nghia Hoang
                        </div>

                        <div className="post__content-info-time">
                            1 hour ago
                        </div>  
                    </div>

                    <div className="post__content-main">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Numquam neque velit asperiores facere quod reiciendis,
                        aliquam fugiat labore omnis delectus blanditiis fuga molestias, 
                        soluta ratione voluptatem dolores facilis architecto non.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Numquam neque velit asperiores facere quod reiciendis,
                        aliquam fugiat labore omnis delectus blanditiis fuga molestias, 
                        soluta ratione voluptatem dolores facilis architecto non.

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Numquam neque velit asperiores facere quod reiciendis,
                        aliquam fugiat labore omnis delectus blanditiis fuga molestias, 
                        soluta ratione voluptatem dolores facilis architecto non.


                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}
