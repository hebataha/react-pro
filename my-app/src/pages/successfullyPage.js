import React from 'react';
import PropTypes from 'prop-types';
import HeaderRegister from '../components/headerRegister';
// import user from "./images/user.svg";
// import ThreeDivs from '../components/threeDivs';
import WhiteDiv from '../components/whiteDiv';



const SuccessfullyPage = props => {
    return (
        <div>
         <HeaderRegister name="Reset Password"/>

        <WhiteDiv>

        <div className="row text-center forget"  
        
        
        style={{  

            position: "relative",
            top: "20px",

          }}
 
>
         <p style={{color:"#00912D"}}>Your Password Has been <br/>changed successfully .</p>
        <button classNameName="btn"  style={{

width:"150px",border: "1px solid #0078FF",color:"#0078FF",background: "#fff",   height: "35px",

        }}>
                <i 
                style={{    
                     color:" #0078FF",
                    width: "8px",
                    position: "relative",
                    top: 2,
                    right: 0,}}
         
            className="fas fa-chevron-right"></i> 
          
            go to home 

  
        </button>    
        
        
        </div>

        </WhiteDiv>
        </div>
    );
};


export default SuccessfullyPage;