import React from "react";
import Slider from "react-slick";
import Forst from '../images/forest.jpeg';

 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    
      <Slider {...settings}>
        <div>
        <img src={Forst}/>
        </div>
        <div>
        <img src={Forst}/>
        </div>
        <div>
        <img src={Forst}/>
        </div>
        <div>
        <img src={Forst}/>
        </div>
        <div>
        <img src={Forst}/>
        </div>
        <div>
        <img src={Forst}/>
        </div>
      </Slider>
    
    );
  }
}

export default SimpleSlider;