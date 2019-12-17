import React from 'react';
import PropTypes from 'prop-types';

const WhiteDiv = props => {
    return (
        <div>
             <div className="about-con" style={{marginTop:" 50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 about-co"
            style={{ background:" #fff",
                padding:" 10px 50px",
                marginTop: "0",
                height:"200px",
            }}>
       {props.children}
        </div>
        </div> 
           </div>    </div>     </div>
    );
};


export default WhiteDiv