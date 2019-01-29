import React from 'react';
import {combineReducers} from 'redux'
import prodReducer from './prodReducer';
import cartReducer from './cartReducer';
import ProdReducer from './prodReducer';

const rootReducer =combineReducers({
    products: ProdReducer,
    carts: cartReducer
});
export default rootReducer;