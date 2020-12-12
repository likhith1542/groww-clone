import React from 'react'
import "./Download.css"
function Download() {
    return (
        <div className="download" >
            <div className="download__inner" >
                <div className="download__left" >
                    <h2 className="download__h2" >Download the App Now!</h2>
                    <h4 className="download__h4" >Available On</h4>
                    <div className="download__icons" >
                        <img src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/playstore-copy.ab53a37e.png" alt="" />
                        <img src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/apple-2.3cf98453.png" alt="" />
                    </div>
                </div>
                <div className="download__right" >
                    <img src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/banner.b567b48d.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Download
