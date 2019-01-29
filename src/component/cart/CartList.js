import React from 'react';
import {Component} from 'react';
import Product from "../product/Product"
import {removeFromCart} from '../../actions/actionCart'
import {connect} from 'react-redux';
 
import { Button } from 'reactstrap';
 class CartList extends Component{

 removeFromCart_(value){
        this.props.removeFromCart(value);
  }

addToState(){
     return(
      this.props.price.map((item)=>{ 
          return (item.price)
                 }))
              }
render(){
  const {cartitems}=this.props;
  const summ= this.addToState().reduce((curr,prev)=>{
    return (prev  + curr)
  });
   
  console.log(summ)
  const prodcc =cartitems.map((item ,key)=>{

  return(
    
   <div key={key}>
           <div>
                  <Product  
                      image={item.image}
                      name= {item.name}
                      price={item.price}
                      />
                    <  Button color="danger" onClick={()=>{this.removeFromCart_(key,item.name)}}>Remoove from the Cart</Button>
         </div>   
    </div>
    )});

  
		return(
      <div>{prodcc}
      <div>
        <h3>All prise {summ }</h3>
      </div>
     <button onClick={this.addToMock}>Mock button</button>
      </div>
    
			)
 
	}

}
const mapStateToProps =(state)=>{

  return {
       price:state.carts
  }
}
const mapDispatchToProps =(dispatch)=>{
  /* return {
     actions:bindActionCreators(actions,dispatch)
   }*/
   return{
    removeFromCart: value=> dispatch( removeFromCart(value))
 }}
 
 export default connect(mapStateToProps,mapDispatchToProps)(CartList);