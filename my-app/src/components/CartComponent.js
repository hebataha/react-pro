import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import Forst from '../images/forest.jpeg';

/**
* @author
* @class CartComponent
**/

class CartComponent extends Component {
state = {
    works : [

    ]
}

    componentDidMount = () =>{
        axios.get('js/cart.json').then( res => {this.setState({
            works: res.data.works
        }) })
    }
//  state = {}
 render() {
     const {works} = this.state;

     const workList = works.map( (workItem) =>{
         
        return(
            <div className="col-md-3">

            <div className="card" key={workItem.id}>
                <img src={workItem.image}/>
                <div className="card-info">
                <h3>{workItem.title}</h3>
<p>{workItem.body}</p>
        {/* <p>{workItem.id}</p> */}
                    </div>
  
        </div>
        </div>

        )


     }

     )
  return(
   <div className="container">

       <div className="row card-list">
     {workList}
       </div>
       </div>


    )
   }
 }


export default CartComponent