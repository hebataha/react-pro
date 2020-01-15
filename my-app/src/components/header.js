import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = props => {
    return (
        <div>
            <div className="header ">
            <nav className="navbar main-header navbar-default navbar-inverse navbar-fixed-top ">
        <div className="container-fluid ">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
    
                    <a href="/index"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H-6iB46Ko9YA-l3bvefvA_haZq_BbHhNj0JN6o8u8pxNLwuS&s"/></a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className=" nav navbar-nav">
                        <li>
                        <Link  exact to="/">Home</Link> 
                        
                        
                        </li>
                         <li>              
                            
                                 <Link to="/Send">Regist</Link> 

                        </li> 
                        
                    
                        <li>              
                            
                            <Link to="/Re">Reset Pass</Link> 

                   </li>                     
                   <li>              
                            
                            <Link to="/Cart"> Cart</Link> 

                   </li>    


                             <li>              
                            
                            <Link to="/lo">Login  </Link> 

                   </li>                         
                                    
                    </ul>
                </div>
            </div>
        </div>
    </nav>
                
            </div>
        </div>
    );
};



export default Header;