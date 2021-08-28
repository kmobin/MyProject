import {combineReducers} from 'redux'
import menuListReducer from './CounterReducers';
import getId from './getId';




 const reducers = combineReducers({
    // counter:counterReducer
    show:menuListReducer,
    id:getId
 })

 export default reducers