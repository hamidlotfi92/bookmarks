//middleware is something that sits between action and reducer. it gets the indormation before reducer
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import bookReducer from "./book/book.reducer";
import { persistReducer } from "redux-persist";


const rootReducer = combineReducers({book:bookReducer})

// config object for persistance and storage
const persistConfig={
    // at what point do we want to start storing everithing
    key:'root',
    // points to the object from redux-persist
    storage,
    // list of reducer we want to store as array,here user is handled by firebase auth persistance session
    whitelist:['book']
}

export default persistReducer(persistConfig,rootReducer)