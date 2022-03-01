import { createStore,combineReducers, applyMiddleware } from 'redux';
import { MaterialReducer } from './reducers/materials/MaterialReducer';
import { SellerReducer } from './reducers/materials/SellerReducer';
import {ItemCatReducer} from './reducers/materials/ItemCatReducer';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({MaterialReducer, SellerReducer, ItemCatReducer});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
