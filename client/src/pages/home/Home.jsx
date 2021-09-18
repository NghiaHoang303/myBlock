import React from 'react'
import CreateBlog from '../../component/createBlog/CreateBlog'
import EverythingBlog from '../../component/everythingBlog/EverythingBlog'
import TopFeature from '../../component/features/TopFeature'
import Header from '../../component/header/Header'
import { headerData } from '../../component/header/headerData'
import StunningDesign from '../../component/stunningDesign/StunningDesign'

export default function Home() {
    return (
        <div>
            <Header  sliders={headerData}/>
            <TopFeature/>
            <StunningDesign/>
            <EverythingBlog/>
            <CreateBlog/>
        </div>
    )
}
