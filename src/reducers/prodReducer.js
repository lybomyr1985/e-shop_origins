import prod from '../data/dataProduct'

const instalState={
    products: prod
}

function ProdReducer(state=instalState.products,action){
    switch(action.type){
        case "ADD_PROD": return [...state,action.payload];
        default : return state;
    }
}

export default ProdReducer;