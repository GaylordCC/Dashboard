import React from "react";
import "./__styles__/index.css";
import logo1 from "./__styles__/image/logo1.png";


const Logo = () => {

    return (
        <div className="logo">
            <div className="image">
                <img className="im-logo1" src={logo1}/>
            </div>
            <div className="text">
                <h2 className="text-logo1">Positivus</h2>
            </div>
        </div>
    )
}

export default Logo