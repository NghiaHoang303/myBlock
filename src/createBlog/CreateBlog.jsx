import React from 'react'
import './createBlog.css'
export default function CreateBlog() {
    return (
        <div className="createBlog row">
            <div className="col-6 createBlog-title" data-aos="fade-right">How to create a blog</div>
            <div className="col-6">
                <ol className="list-step" data-aos="fade-left">
                    <li>Buy theme on Themeforest and Download to your computer </li>
                    <li className="mt-5 mb-5" >Install Theme by chosing on of two ways (following included documentation)</li>
                    <li>Install Included Plugins & import demo content (following included documentation)</li>
                </ol>
            </div>
            
        </div>
    )
}
