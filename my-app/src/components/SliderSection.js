import React from 'react';
import PropTypes from 'prop-types'; 
import Slide from '../images/visitor/slide.png';
import Left from '../images/visitor/left.png';
import SimpleSlider from '../components/SliderComponent';





const SliderSection = props => {
    return (
        <div>
        <div className="container">

            <div className="row">

              
            <div className="col-md-8">
                <SimpleSlider/>
           </div>     
  
            <div className="col-md-4">
            <div className="left-con">
                        <div className="img-ads">
                            <img src={"http://abdulmateen.net/wp-content/uploads/2018/01/ALL-IN-ONE-SHOP.jpg"}/>
                        </div>

                





              
                            </div>
            </div>              
                            </div>                             </div>     
    
                            </div>     

                             


    );
};



export default SliderSection;