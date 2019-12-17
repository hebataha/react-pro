import React from 'react';
import PropTypes from 'prop-types';

const HeaderRegister = props => {
    return (
        <div className="header text-center" style={{marginTop:"20px"}}>    <div className="container">
        <ul className="list-unstyled">
            <li>logo</li>
            
            <li>{props.name}</li>
        </ul>
        <p style={{marginTop:"20px"}}>Please type the verification code sent to (+966 5555 333)</p>
    </div>
</div>
    );
};

HeaderRegister.propTypes = {
    
};

export default  HeaderRegister;