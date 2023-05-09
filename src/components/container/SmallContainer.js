import React from "react";


export default function SmallContainer (props) {

    return (
        <div 
        className="container-wrapped"
        label={props.title2}
        style= {
            {
                display: 'flex',
                flexDirection: 'row',
                height: '310px',
                width: '600px',
                borderRadius: '45px',
                border: '2px solid black',
                borderBottom: '6px solid',
                background: (props.backgroundContainer),
            }
        }
        >
            <div className="heading-link"
            style= {
                {
                    height: '210px',
                    width: '221px',
                    marginLeft: '50px',
                    marginTop: '50px',
                }
            }
            >
                <div className="heading"
                style= {
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        lineHeight: '1px',
                        height: '76px',
                        width: '221px',
                        textAlign: 'left',
                        marginTop: '0px',
                    }
                }
                >
                    <div className="div-label-1"
                    style={
                        {
                            width: (props.widthLabel1),
                            height: '38px',
                            background: (props.backgroundLabel),
                            borderRadius: '7px',
                        }
                    }
                    >
                        <h3 className="label-1"
                        style={
                            {
                                width: '207px',
                                height: '38px',
                                fontSize: '30px',
                                lineHeight: '1px',
                                margin : '0', 
                                paddingTop:'14px',
                                paddingRight:'7px',
                                paddingLeft:'7px',
                            }
                        }
                        >{props.title1container}</h3>
                    </div>
                    <div className="div-label-2"
                    style={
                        {
                            width: (props.widthLabel2),
                            height: '38px',
                            background: (props.backgroundLabel),
                            borderRadius: '7px',
                        }
                    }
                    >
                        <h3 className="label-2"
                        style={
                            {
                                width: '183px',
                                height: '38px',
                                fontSize: '30px',
                                margin : '0', 
                                paddingTop:'14px',
                                paddingRight:'7px',
                                paddingLeft:'7px',
                            }
                        }
                        >{props.title2container}</h3>
                    </div>
                </div>
                <div className="link"
                style= {
                    {
                        display: 'flex',
                        flexDirection: 'row',
                        height: '41px',
                        width: '164px',
                        marginTop: '87px',
                     }
                }
                >
                    <div className="image-link"
                    style={
                        {
                            height: '41px',
                            width: '41px',
                        }
                    }
                    >
                        <img src={props.link}/>
                    </div>
                    <div className="text-link"
                    style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '28px',
                            width: '108px',
                            marginLeft: '15px',
                            fontSize: '20px',
                        }
                    }
                    >
                    <p >Learn more</p>
                    </div>
                </div>
            </div>
            <div className="illustration"
            style={
                {
                    height: '166.1px',
                    width: '210px',
                    marginLeft: '69px',
                    marginTop: '72px',
                }
            }
            >
                <img src={props.illust}/>
            </div>
        </div>
    )
}