import React from 'react'
import "./Homeone.css"
import HomePageAnimation from './HomePageAnimation'
function Homeone() {
    return (
        <div className="homeone" >
            
            <HomePageAnimation className="homepageanim" btn={true} pos={0} title="Invest in" listarray={["Stocks","Mutual Funds","Gold","US Stocks","Fixed Deposits"]} desc="India’s fastest growing investment platform with 90Lakh+ Users" btntext="Get Started" url="/" width="600px" height="500px" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/mf_groww@3x.c5c99292.png" />
            <HomePageAnimation className="homepageanim" btn={false} linktext="Why Direct Mutual Funds?" pos={1} title="Earn upto 1.5% extra Returns" listarray={[]} desc="Major investment platforms provide regular mutual funds,but Groww provides you direct mutual funds" btntext="Get Started" url="/" width="400px" height="500px" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/direct_groww@1x.eb645aec.png" />
            <HomePageAnimation className="homepageanim" btn={true} pos={0} title="Invest for FREE" listarray={[]} desc="Groww lets you invest online - no transaction charges,no subscription charges,no hidden charges!" btntext="Explore Mutual Funds" url="/" width="330px" height="550px" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/free_groww@1x.4dec5bfa.png" />
            {/* <HomePageAnimation className="homepageanim" title="Invest in" listarray={[]} desc="India’s fastest growing investment platform with 90Lakh+ Users" btntext="Get Started" url="/" src="https://assets-netstorage.groww.in/website-assets/prod/1.2.1/build/client/images/mf_groww@3x.c5c99292.png" /> */}
        </div>
    )
}

export default Homeone
