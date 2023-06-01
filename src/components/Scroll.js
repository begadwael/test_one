import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll' , border: "1px solid black", height: '800px', margin:'5px', paddingTop:'10px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;