import React, {useState, useEffect, useContext} from 'react'
import CreateBlog from '../../component/createBlog/CreateBlog'
import EverythingBlog from '../../component/everythingBlog/EverythingBlog'
import TopFeature from '../../component/features/TopFeature'
import Header from '../../component/header/Header'
import { headerData } from '../../component/header/headerData'
import Show from '../../component/showAllPosts/ShowAllPosts'
import StunningDesign from '../../component/stunningDesign/StunningDesign'
import axios from 'axios'
import ShowAllPosts from '../../component/showAllPosts/ShowAllPosts'
import { useLocation } from 'react-router'
import {Context} from '../../context/Context'
export default function Home() {
    const[posts, setPosts] = useState([]);
    const {search} = useLocation();
    const {user} = useContext(Context)
    console.log(search);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    
    return (
        <div>
            <Header  sliders={headerData}/>
            <ShowAllPosts posts={posts}/>
            <TopFeature/>
            <StunningDesign/>
            <EverythingBlog/>
            <CreateBlog/>
        </div>
    )
}
