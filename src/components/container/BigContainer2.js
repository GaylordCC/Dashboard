import React from "react";
import Minus from "./images/Minus.png";

export default function BigContainer2 (props) {

    return (
        <div className="big-container"
        style={
            {
                display: 'flex',
                flexDirection: 'column',
                height: (props.heightBC),
                width: '1234px',
                borderRadius: '45px',
                border: '2px solid black',
                background: (props.backgroundBC),
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
                    >{props.titleNL}
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
                    >{props.titleTL}
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
                    <img src={props.imMinimus} />
                </div>

            </div>
        </div>
    )
}