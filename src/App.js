import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import ProductList from './component/product/ProductList';
import {NavLink} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import './App.css'
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             <Container className="head-cont">
                <Row>
                   <Col  xs="3"> 
                    <div className="title-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-eshop-fixed.png"/>
                     
                     </div>
                   </Col> 
                   <Col  xs="4"> 
                   </Col>
                   <Col  xs="3"> 
                    <div className="cart-block">                     
                      <NavLink to="cart">
                      <div>
                            <img src='image/cart.png'/>
                            <h3>Cart</h3>{this.props.c.length==0?'':this.props.c.length}
                      </div>
                        </NavLink>
                      </div>
                    </Col>
                 </Row>
              </Container>
       
        </header>
       
             
               
               <ProductList products={this.props.p}/>
     
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return {
    p:state.products,
    c:state.carts
  }
}

export default connect(mapStateToProps)(App);
