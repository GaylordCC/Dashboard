import React from "react";
import John from "./images/John.png";
import Socialicon from "./images/Socialicon.png";


export default function ResContainer (props) {
    return (
        <div className="res-container"
        style={
            {
                height: "331px",
                width: "387px",
                borderRadius: "45px",
                borderBottom: '7px solid',
                border: "3px solid #191A23",

            }
        }
        >
            <div className="content"
            style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    height: "227.82px",
                    width: "317px",
                    marginTop: "40px",
                    marginLeft: "35px",
                }
            }
            >
                <div className="person"
                    style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            height: "102.82px",
                            width: "317px",
                        }
                    }
                >
                    <div className="picture"
                        style={
                            {
                                height: "102.82px",
                                width: "105.65px",
                            }
                        }
                    >
                        <img src={props.impicture} />
                    </div>  
                    <div className="picture-name"
                    style={
                        {
                            height: "49px",
                            width: "148px",
                            marginTop: "53.82px",
                            marginLeft: "24px",
                            lineHeight: '1px',
                        }
                    }
                    >
                        <p
                        style={
                            {
                                display: "flex",
                                alignItems: "center",
                                fontSize: "20px",
                                fontWeight: "bold",
                                marginTop : '7px',
                            }
                        }
                        >{props.picturename}</p>
                        <p
                        style={
                            {
                                display: "flex",
                                alignItems: "center",
                                fontSize: "18px",
                            }
                        }
                        
                        >{props.pictureafilliation}</p>
                    </div>
                    <div className="social-icon"
                    style={
                        {
                            marginTop: "0px",
                            height: "34px",
                            width: "34px",
                        }
                    }
                    >
                        <img src={Socialicon} />
                    </div>
                </div>
                <div className="line"
                style={
                    {
                        height: "1.5px",
                        background: 'black',
                        marginTop: "28px",
                    }
                }
                >
                    <h />
                </div>
                <div className="resume"
                style={
                    {
                        height: "69px",
                        width: "317px",
                        textAlign: "justify",
                        fontSize: "18px",
                        lineHeight: "22.97px",
                    }
                }
                >
                    <p>
                        {props.resume}
                    </p>
                </div>
            </div>
        </div>
    )
}