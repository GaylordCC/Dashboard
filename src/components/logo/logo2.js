import React from "react";
import "./__styles__/index.css";
import logo2 from "./__styles__/image/logo2.png";


const Logo2 = () => {

    return (
        <div className="logo2">
            <div className="image">
                <img className="im-logo1" src={logo2}/>
            </div>
            <div className="text2">
                <h2 className="text-logo2">Positivus</h2>
            </div>
        </div>
    )
}

export default Logo2