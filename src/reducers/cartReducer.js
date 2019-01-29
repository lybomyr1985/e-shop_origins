import prod from '../data/dataProduct'

const instalState={
  
       carts: []
     
}

function ProdReducer(state=instalState.carts,action){
    switch(action.type){
        case "ADD_TO_CART": return [...state, action.payload ];
        case "REMOVE_FROM_CART":   return  [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload+ 1)
          ]
        //  Object.assign([], ...state.slice(0,1)  )     
            
        default : return state;
    }
}

export default ProdReducer;