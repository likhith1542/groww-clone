import React from 'react'
import Download from './Download'
import Footer from './Footer'
import Fund from './Fund'
import Homeone from './Homeone'
import HomePageAnimation from './HomePageAnimation'
import HomePress from './HomePress'
import HomeUsers from './HomeUsers'
import Trust from './Trust'

function Home() {
    return (
        <div>
            
            <Homeone/>
            <Trust/>
            <HomePress/>
            <HomePageAnimation className="homepageanim" btn={true} pos={0} title="Access anywhere, anytime" listarray={[]} desc="Transact seamlessly, switching between our app an website" btntext="Sign Up" url="/" width="600px" height="500px" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/desktop@1x.84a72fa0.png" />
            <HomeUsers/>
            <Download/>
            <Fund/>
            <Footer/>
        </div>
    )
}

export default Home
