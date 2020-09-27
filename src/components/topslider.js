import React from 'react';
import image from  '../sunset.jpg'


function Slider() {
  return (
    <div style={{marginTop:"1%"}} classNameName="Slider">
        <img src={image} alt="Los Angeles" style={{width: "80%",height:"500px",marginLeft:"10%"}} />
    </div>
  );
}

export default Slider;