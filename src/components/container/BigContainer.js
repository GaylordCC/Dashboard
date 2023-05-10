import React from "react";
import Minus from "./images/Minus.png";

const BigContainer = () => {

    return (
        <div className="big-container"
        style={
            {
                display: 'flex',
                flexDirection: 'column',
                height: '279px',
                width: '1234px',
                borderRadius: '45px',
                border: '2px solid black',
                background: '#B9FF66',
                borderBottom: '6px solid',
            }
        }
        >
            <div className="content"
            style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    height: '77px',
                    width: '1117px',
                    marginTop: '41px',
                    marginLeft: '60px',
                }
            }
            >
                <div className="label"
                style={
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        width: '702px',
                        height: '77px',
                    }
                }
                >
                    <div className="number-label"
                    style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '65px',
                            height: '77px',
                            fontSize: '60px',
                        }
                    }
                    >01
                    </div>
                    <div className="title-label"
                    style={
                        {
                            display: 'flex',
                            alignItems: 'center',
                            width: '612px',
                            height: '38px',
                            marginTop: '19.5px',
                            marginLeft: '25px',
                            fontSize: '30px',
                        }
                    }
                    >Consultation
                    </div>
                </div>
                <div className="plus-icon"
                style={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: '0',
                        marginLeft: 'auto',
                    }
                }
                >
                    <img src={Minus} />
                </div>

            </div>
            <div className="line"
            style={
                {
                    width: '1114px',
                    height: '2px',
                    background: 'black',
                    marginTop: '30px',
                    marginLeft: '60px',
                }
            }
            >
                <h />    
            </div>
            <div className="text-content"
            style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    width: '1114px',
                    height: '60px',
                    textAlign: 'justify',
                    marginLeft: '60px',
                    marginTop: '30px',
                    padding: '0px',
                    fontSize: '18px',
                    lineHeight: '20px',                    
                }
            }
            >
                <p className="paragraph">
                During the initial consultation, we will discuss your business 
                goals and objectives, target audience, and current marketing <br/>efforts. 
                This will allow us to understand your needs and tailor our services 
                to best fit your requirements.
                </p>
            </div>
        </div>
    )
}

export default BigContainer