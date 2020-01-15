import React from "react";
import Slider from "react-slick";
import Forst from '../images/forest.jpeg';
import P from '../images/p.jpeg';

import M from '../images/ad.png';
import PP from '../images/pp.jpeg';




 
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
        <img src={"        https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940  "}/>
        </div>
        <div>
        <img src={"https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
        </div>
        <div>
        <img src={"https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
        </div>
        <div>
        <img src={"https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
        </div>
        <div>
        <img src={"https://images.pexels.com/photos/225448/pexels-photo-225448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
        </div>
        <div>
        <img src={"https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
        </div>
      </Slider>
    
    );
  }
}

export default SimpleSlider;