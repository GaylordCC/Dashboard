import React from "react";
import "./__styles__/index.css";
import Button from "../button/Button";
import SmallContainer from "../container/SmallContainer";
import tokyomagnifier from "../container/images/tokyomagnifier.png";
import blackgreen from "../container/images/blackgreen.png";
import BigContainer from "../container/BigContainer";
import BigContainer2 from "../container/BigContainer2";
import Minus from "../container/images/Minus.png";
import ResContainer from "../container/ResContainer";
import John from "../container/images/John.png";

const BodyDashboard = () => {


    return (
        <div className="main-wrapped">
            <h1>DASHBOARD REACT JS</h1>
            {/* <Button width="264px" color="white" background="#B9FF66" title1="Book in this site" /> */}
            <SmallContainer title1container="Search engine" title2container="optimization" backgroundContainer="#F3F3F3" backgroundLabel="#B9FF66" widthLabel1="221px" widthLabel2="197px" illust={tokyomagnifier} link={blackgreen} />
            <BigContainer titleTL="Consultation" titleNL="01" backgroundBC="#B9FF66" heightBC="279px"  imMinimus={Minus} heightL="2px" />
            <BigContainer2 titleTL="Research and Strategy Development" titleNL="02" backgroundBC="#F3F3F3" heightBC="159px"  imMinimus={Minus} heightL="2px" />
            <ResContainer impicture={John} picturename="John Smith" pictureafilliation="CEO and Founder" 
            resume="10+ years of experience 
            in digital <br/> marketing. Expertise 
            in SEO, PPC, <br/> and content strategy"
            
            />

        </div>
    )
}

export default BodyDashboard