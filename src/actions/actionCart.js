 
 export const addToCart=( value)=>{
    var msg =window.confirm('Add to cart'+''+value.name);
    if(msg){
     return {
          type: 'ADD_TO_CART',
         payload: value,
          
     }  
    }else return {
        type: 'Null',
        payload: null,
    }
     
    }


 export const removeFromCart=(value,name)=>{
    var msgr = window.confirm('Remove'+name)
    if(msgr){
  return {
            type: 'REMOVE_FROM_CART',
            payload: value
        }
    }else return{
            type: 'Null',
            payload: null,
        }
       }