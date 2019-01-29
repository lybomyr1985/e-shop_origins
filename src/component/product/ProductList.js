import React from 'react';
import {Component} from 'react';
import Product from "./Product"
import {addToCart} from '../../actions/actionCart'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actionCart'
import  {Link} from 'react-router-dom'
import './product-css.css'
import { Button } from 'reactstrap';

  class ProductList extends Component{
 
 addToCart_(value){
   this.props.addToCart(value)
   
 }
   addToMock(){
  console.log('Item id[[[[[[]]]]');
 }

	render(){
   // const {addToCart} =this.props.actions;
const {products}=this.props;
const prod =products.map((item ,key)=>{
  console.log('url '+item.url);
  return(
   
      <div key={key} className="prod-list">
      <Link to={`product/${item.id}`}>
                  <Product  
                    image={item.image}
                      name= {item.name}
                      price={item.price} currency={item.currency}
                      />
               </Link> 
               
               <Button color="success" className="btn-add_to_cart" onClick={
                 ()=>{this.addToCart_(
             {
                 name:item.name,
                 id: item.id,   
                 price: item.price,
                 currency: item.currency,
                image: item.image,
                     }
                     
                     )}

                 }>Ad to Cart</Button>
             
         </div>    
    )});

 
 
		return(
      <div className="prod-list_controller">
          {prod}
          <button onClick={this.addToMock}>Mock button</button>
      </div>
    
   
			)
 
	}

}

const mapDispatchToProps =(dispatch)=>{
 /* return {
    actions:bindActionCreators(actions,dispatch)
  }*/
  return{
     addToCart: value=> dispatch( addToCart(value))
}}

export default connect(null,mapDispatchToProps)(ProductList);