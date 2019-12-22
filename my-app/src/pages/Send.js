import React from 'react';
import PropTypes from 'prop-types';
import WhiteDiv from '../components/whiteDiv';
import HeaderRegister from '../components/headerRegister';

const Send = props => {
    return (
        <div>
               <HeaderRegister name="Reset Password"/>

    <WhiteDiv>
    <div className="contact col-md-8 col-md-offset-2">
                  <div>
                        <p>send a message to us by this form</p>
                  </div>
                  <input
                  style={{position: "relative"}}
                  type="text"
                  id="name"
                  placeholder="Type Of Massage"
                  className="form-control"
              ></input>



                <input
                  type="text"
                  id="name"
                  placeholder="Full Nmae"
                  className="form-control"
                />
             
                <input
                  type="text"
                  id="phone"
                  placeholder="Mobile Number"
                  className="form-control"
                />
                <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
              />
                <textarea
                  className="form-control text-center"
                  placeholder="Detalis"></textarea>

                <button className="btn btn-f">
                  Send
                </button>
              </div>
    </WhiteDiv>
            
        </div>
    );
};

Send.propTypes = {
    
};

export default Send;