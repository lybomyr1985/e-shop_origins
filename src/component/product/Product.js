import React from 'react';
import './product-css.css'

const Product =({image,url,id,name,price,currency})=>{
    return (
        <div className="prod-elem">
            <img src={image}/>            
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{price} {currency}</div>
          
        </div>
    )

}

export default Product;