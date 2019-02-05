import React, { Component } from 'react'
import {connect} from 'react-redux'
 
import {NavLink} from 'react-router-dom'
import CartList from '../cart/CartList'
import './cart-css.css'
import { Button } from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
class Cart extends Component {
    render() {
         
        return (
            <div className="buck-container">
            <Container>
                <Row>
                  <Col> <h1>Cart </h1></Col>
                </Row>
                <Row>
                  <Col>
                       {this.props.cc.length==0?  <div>Cart is empty</div>:<CartList cartitems={this.props.cc}/>   }
                       <NavLink to={`/`}> <Button color="secondary"> Back</Button></NavLink>
                  </Col>
                 </Row>
            </Container>
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