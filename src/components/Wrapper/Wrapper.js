import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="p-5 col-12 text-div">
        <p className="heading-text blue-color h5 font-weight-bold mx-auto text-center">
            {props.children}
        </p>
        <p className="heading-text blue-color h4 font-weight-bold mt-5 text-center">
            {props.result} 
        </p>
    </div>
);  

export default Wrapper;