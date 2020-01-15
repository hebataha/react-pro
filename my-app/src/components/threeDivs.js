import React from 'react';
import PropTypes from 'prop-types'; 
import WhiteDiv from './whiteDiv';
import user from '../images/user.svg';

const ThreeDivs = props => {
    return (
        <div>
            <WhiteDiv>

<div className="row text-center in" 
style={{position:"relative",top:"70px"}}
>
                <div className="col-md-6 col-md-offset-3">
                    <div className="dad">
                  
                    <p style={{display:"inline-block"}}>  Login As User</p>
                    <img src={user}/>

                </div>
            </div>
                <div  className="col-md-6 col-md-offset-3">
                        <div className="dad">

                       
                        <p style={{display:"inline-block"}}>  Login As Company</p>
                        <img src={user}/>

                    </div>
                </div>

                    <div  className="col-md-6 col-md-offset-3">
                            <div className="dad">

                            <p style={{display:"inline-block"}}>  Login As Person</p>
                            <img src={user}/>

                        </div>
                    </div>

              </div>
</WhiteDiv>
        </div>
    );
};


export default ThreeDivs;