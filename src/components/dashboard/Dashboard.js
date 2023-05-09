import React from "react";
import "./__styles__/index.css";
import Button from "../button/Button";
import SmallContainer from "../container/SmallContainer";
import tokyomagnifier from "../container/images/tokyomagnifier.png";
import blackgreen from "../container/images/blackgreen.png";

const BodyDashboard = () => {


    return (
        <div className="main-wrapped">
            <h1>DASHBOARD REACT JS</h1>
            <Button width="264px" color="white" background="#B9FF66" title1="Book in this site" />
            <SmallContainer title1container="Search engine" title2container="optimization" backgroundContainer="#F3F3F3" backgroundLabel="#B9FF66" widthLabel1="221px" widthLabel2="197px" illust={tokyomagnifier} link={blackgreen} />
        </div>
    )
}

export default BodyDashboard