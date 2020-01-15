import React from 'react';
import PropTypes from 'prop-types';
import re from '../images/re.png';
import googlePlay from '../images/Login/Subtraction.svg';
import appleStore from '../images/Login/all.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import pinterest from '../images/pinterest.svg';

import instagram from '../images/instagram.svg';


// import re from '../images/re.png';
// import re from '../images/re.png';
// import re from '../images/re.png';




const Footer = props => {
    return (
        <div>
            <footer>
                <div className="container">

                <div className="row">
                    <div className="col-md-2">
                       <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H-6iB46Ko9YA-l3bvefvA_haZq_BbHhNj0JN6o8u8pxNLwuS&s"/>
                    </div>
                    <div className="col-md-4">
                        <div className="all">

        <ul className="list-unstyled">

            <li><a href="#">Faq's</a></li>
            <li><a href="#">complatis</a></li>

            <li><a href="#">about us</a></li>



        </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="avi">
                            <h5>avilabel in</h5>
                            <img src={googlePlay}/>
                            <img src={appleStore}/>

                        </div>
                    </div>   
                    
                       <div className="col-md-3">
                        <ul className="list-unstyled social">
                            <li><a href="#">
                               <img src={facebook}/>
                                </a></li>

                                <li><a href="#">
                               <img src={twitter}/>
                                </a></li>
                             
                                <li><a href="#">
                               <img src={pinterest}/>
                                </a></li>   

                              
                                <li><a href="#">
                               <img src={instagram}/>
                                </a></li>  
                        </ul>
                    </div>
                    </div>
                </div>

            </footer>

            
            <div className="last-foot text-center">

<p>Copyright copy 2020 Freepik Company S.L. All rights reserved. </p>
</div>
        </div>
    );
};

export default Footer;