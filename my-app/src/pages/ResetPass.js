import React from 'react';
import PropTypes from 'prop-types';
import WhiteDiv from '../components/whiteDiv';
import HeaderRegister from '../components/headerRegister';


const ResetPass = props => {
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
                <div className="col-md-6 col-md-offset-3">
                   <input className="form-control" type="text" placeholder="New Password"/>
                   <i classNameName="fas fa-eye"></i>
            </div>
            <div className="col-md-6 col-md-offset-3">
                    <input className="form-control" type="text" placeholder="Conform New Password"/>
                    <i className="fas fa-eye"></i>
                </div>

                <div className="col-md-6 col-md-offset-3">
                       <button className="btn">Finish</button>
                    </div>
                </div>

                </WhiteDiv>
        </div>
    );
};



export default ResetPass;