import {createStore,applyMiddleware,compose} from 'redux';
import reducers from '../reducers'
import thunk from 'redux-thunk'
export default   (state)=>{
    const store =createStore(reducers,state,compose(
        applyMiddleware(thunk),
        typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
    ))
    return store
}