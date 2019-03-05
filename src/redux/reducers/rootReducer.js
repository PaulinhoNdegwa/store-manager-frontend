import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    loginReducer,
    productsReducer,
    categoryReducer
})

export default rootReducer