import React from 'react';
import PropTypes from 'prop-types';
import HeaderRegister from '../components/headerRegister';
// import user from "./images/user.svg";
import ThreeDivs from '../components/threeDivs';

const ThreeDivsPage = props => {
    return (
        <div>
            <HeaderRegister name="forget password"/>
            <ThreeDivs/>
        </div>
    );
};



export default ThreeDivsPage;