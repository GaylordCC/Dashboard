import React from "react";
import "./__styles__/index.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import SmallContainer from "../container/SmallContainer";
import tokyomagnifier from "../container/images/tokyomagnifier.png";
import blackgreen from "../container/images/blackgreen.png";
import BigContainer from "../container/BigContainer";
import BigContainer2 from "../container/BigContainer2";
import Minus from "../container/images/Minus.png";
import ResContainer from "../container/ResContainer";
import John from "../container/images/John.png";
import Illus13 from "./__styles__/images/Illus13.png";

const BodyDashboard = () => {


    return (
        <div className="main-wrapped">
            <div className="landing-page">
                <div className="navigator-bar">
                    <div className="frame9">
                        <Logo />
                    </div>
                    <div className="frame10">
                        <div className="AboutUs">
                            <h4><a href="">About Us</a></h4>
                        </div>
                        <div className="services">
                            <h4><a href="">Services</a></h4>
                        </div>
                        <div className="use">
                            <h4><a href="">Use Cases</a></h4>
                        </div>
                        <div className="Pricing">
                            <h4><a href="">Pricing</a></h4>
                        </div>
                        <div className="blog">
                            <h4><a href="">Blog</a></h4>
                        </div>
                        <Button width="264px" color="black" background="white" title1="Request a quote" />
                    </div>
                </div>
                <div className="header">
                    <div className="frame13">
                        <div className="title13">
                            <h1>Navigating the <br/> digital landscape <br/> for success</h1>
                        </div>
                        <div className="text13">
                            <p>
                            Our digital marketing agency helps businesses <br/> grow and succeed 
                            online through a range of <br/> services including SEO, PPC, social media 
                            marketing, <br/> and content creation.
                            </p>
                        </div>
                        <div className="button13">
                            <Button width="264px" color="white" background="black" title1="Book a consultation" />
                        </div>
                    </div>
                    <div className="ilustration13">
                        <img src={Illus13} />
                    </div>

                </div>
            </div>





            {/* <Button width="264px" color="white" background="#B9FF66" title1="Book in this site" /> */}
            {/* <SmallContainer title1container="Search engine" title2container="optimization" backgroundContainer="#F3F3F3" backgroundLabel="#B9FF66" widthLabel1="221px" widthLabel2="197px" illust={tokyomagnifier} link={blackgreen} /> */}
            {/* <BigContainer titleTL="Consultation" titleNL="01" backgroundBC="#B9FF66" heightBC="279px"  imMinimus={Minus} heightL="2px" /> */}
            {/* <BigContainer2 titleTL="Research and Strategy Development" titleNL="02" backgroundBC="#F3F3F3" heightBC="159px"  imMinimus={Minus} heightL="2px" /> */}
            {/* <ResContainer impicture={John} picturename="John Smith" pictureafilliation="CEO and Founder" 
            resume="10+ years of experience 
            in digital marketing. Expertise 
            in SEO, PPC, and content strategy"
            
            /> */}

        </div>
    )
}

export default BodyDashboard