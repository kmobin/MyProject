import {combineReducers} from 'redux'
import menuListReducer from './CounterReducers';
import getId from './getId';
import adminReducer from './adminReducer';
import customerReducer from './customerReducer';
import CounterReducers from './CounterReducers';
 const reducers = combineReducers({
   
   //  show:menuListReducer,
   //  id:getId

    
      login:CounterReducers,
      admin: adminReducer,
      customer: customerReducer
  
 })

 export default reducers