import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


// import App from './demo2-github-profil/page/app/App';
// import App from './demo3/source/d1-4/App.js'

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();

// import App from './demo6-bindActionCreators/app.js'

/*import App from './demo7-asysc-actions/app.js'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

function reducer(state={num:1,success:''},action) {
    var newState=state;
    switch (action.type){
        case 'add':
            return Object.assign({},newState,{
                num:newState.num+1
            })
            break;
        case 'ADDLOGING':
            return Object.assign({},newState,{success:action.success})
            break;
        case 'ADDSUCCESS':
            return Object.assign({},newState,{success:action.success,num:action.num})
            break;
        case 'add_error':
            return Object.assign({},newState,{success:action.success});
            break;
        default:
            return state;
    }
}


const store=createStore(reducer,applyMiddleware(thunk))*/

import App from './demo9-reduser-slite/app.js'
import reducer from './demo9-reduser-slite/reduces'
 import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'

const store=createStore(reducer)

ReactDOM.render( <Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'))
registerServiceWorker();
