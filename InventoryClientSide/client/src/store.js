import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(reducers,composeWithDevTools(applyMiddleware()))


export default store