import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers/rootReducer';
import Cart from './component/cart/Cart';
import  ProductItem from './component/product/ProductItem' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route, Switch}  from 'react-router-dom';


const store =createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <div className="content">
            <Route  exact path='/' component={App}/>
            <Switch>
            <Route   path='/cart'  component={Cart}/>
            <Route path='/product/:id' component={ProductItem}/>   
            </Switch>
             
        </div>
    </BrowserRouter>    
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
