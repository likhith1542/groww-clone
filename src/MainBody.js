import React from 'react'
import "./MainBody.css"
import MainBodyLeft from './MainBodyLeft'
import MainBodyRight from './MainBodyRight'
import MainNavBar from './MainNavBar'
function MainBody() {
    return (
        <div className="mainbody" >
            <div>
            <MainNavBar/>
            </div>
            <div className="mainbody__body" >
                <MainBodyLeft/>
                <MainBodyRight/>
            </div>
        </div>
    )
}

export default MainBody
