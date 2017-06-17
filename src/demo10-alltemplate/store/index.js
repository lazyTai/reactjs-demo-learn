import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware,compose} from  'redux';



var applyMiddlewares=[thunk,createLogger()]
export  default  compose(applyMiddleware(...applyMiddlewares))(createStore)
