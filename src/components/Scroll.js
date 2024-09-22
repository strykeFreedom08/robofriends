import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid blue', height: '50rem'}}>
            {props.children}
        </div>
    );
}

export default Scroll;