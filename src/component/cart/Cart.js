import React, { Component } from 'react'
import {connect} from 'react-redux'
 
import {NavLink} from 'react-router-dom'
import CartList from '../cart/CartList'
import './cart-css.css'
import { Button } from 'reactstrap';
class Cart extends Component {
    render() {
         
        return (
            <div className="cart-container">
                <h1>Cart </h1>
               {this.props.cc.length==0?  <div>Cart is empty</div>:<CartList cartitems={this.props.cc}/>   }
               <NavLink to={`/`}> <Button color="secondary"> Back</Button></NavLink>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    
    return {
      cc:state.carts
    }
  }
  export default connect(mapStateToProps)(Cart)