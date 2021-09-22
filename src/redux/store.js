import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import rootReducer from "./root.reducer";

const middlewares=[];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

//this function gets rootReducer and and adds middleware to it and creates our redux store.store is redux's big state object
export const store=createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor=persistStore(store);

export default {persistor,store};