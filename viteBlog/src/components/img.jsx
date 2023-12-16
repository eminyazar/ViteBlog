import React from "react";
import image from '../img/1.jpg'

const ImgComponent = () => {
    return (
        <div>
            <img src={image} alt="1.jpg" className="img-fluid"/>
        </div>
    );
};
export default ImgComponent;