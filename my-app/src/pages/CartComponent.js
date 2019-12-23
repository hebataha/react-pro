import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Forst from '../images/forest.jpeg';

/**
* @author
* @class CartComponent
**/

class CartComponent extends Component {
 state = {}
 render() {
  return(
   <div className="container">

       <div className="row">
           <div className="col-md-3">
               <div className="card">
                    <img src={Forst}/>
                    <h3>name</h3>
  <p>age</p>
  <p>address</p>
                </div>

           </div>
       </div>
       
   </div>
    )
   }
 }


export default CartComponent