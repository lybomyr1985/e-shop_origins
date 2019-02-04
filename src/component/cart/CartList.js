import React from 'react';
import {Component} from 'react';
import Product from "../product/Product"
import {removeFromCart} from '../../actions/actionCart'
import {connect} from 'react-redux';
 
import "./cart-css.css"
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
    
   <div key={key} className="buck-block">
           
                 <div className="buck-block_item"> 
                      <img src={item.image}/>
                      <div className="buck-n_p">
                      <div className="buck-block_name">{item.name}</div>
                      <div className="buck-block_price">{item.price}</div>
                      </div>
                  </div> 
                  <div className="buck-btn">
                    <  Button color="danger" onClick={()=>{this.removeFromCart_(key,item.name)}}>Remoove from the Cart</Button>
                  </div>
    </div>
    )});

  
		return(
      <div>{prodcc}
      <div>
        <h3 className="buck-prise">All prise {summ }</h3>
      </div>
    
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