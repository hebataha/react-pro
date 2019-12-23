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
            <div lassName="left-con">
                        <div className="img-ads">
                            <img src={Left}/>
                        </div>

                





              
                            </div>
            </div>              
                            </div>                             </div>     
    
                            </div>     

                             


    );
};



export default SliderSection;