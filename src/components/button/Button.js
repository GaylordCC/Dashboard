import React from "react";


export default function Button (props) {

    const handleClick = () => {
    };

    return (
        <div>
            <button
                className="btn btn-default"
                label= {props.title1}
                style={
                    {
                        margin: '10px 0',
                        borderRadius: '14px',
                        height: '68px',
                        width: (props.width),
                        background: (props.background),
                        color: (props.color),
                    }
                }
                onClick={handleClick}
                >
                {props.title1}
            </button>
        </div>
    );
}