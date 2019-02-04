import React, { Component } from 'react';
import Product from './Product'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './product-css.css'
import { Button } from 'reactstrap';

class ProductItem extends Component {
state={
    pro:this.props.pr
}

    render() {
  const{pr}=this.props;
  console.log('pr'+this.state.pro);
        return (
            <div className="product-item_cont">
             <NavLink to={`/`}> <Button color="secondary"> Back</Button></NavLink>
                <div className="product-item_element">
                
                 <h3>{pr.name}</h3>
                    <Product
                     image={"/"+pr.image}
                    />
                    <div className="product-item_price"> <span>Price</span>:{pr.price}</div>
             </div>
           
            </div>
        );
    }
}
/*
const ProductItem= ({pr})=> (<div>
     
    <h1>  </h1>
      <Product 
      img={pr.image}/>
     <div>{pr.price})</div>
     <span>{pr.id}</span>
   
</div>)*/
const mapStateToProps =(state,ownProps)=>{
 console.log('ownProps.match.params.id'+ownProps.match.params.id);
 
 for(var v in state.products){
    console.log('products'+state.products[v].price);
 }
    return {
      pr: state.products.find(item=>item.id==ownProps.match.params.id)
    }
    console.log();
  }
  export default connect(mapStateToProps)(ProductItem);

