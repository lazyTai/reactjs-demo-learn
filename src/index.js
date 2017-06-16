import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


// import App from './demo2-github-profil/page/app/App';
// import App from './demo3/source/d1-4/App.js'

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();

import App from './demo5-redux-fist/app.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {Map,fromJS} from 'immutable';

function reducer(state={num:0},action) {
    var newState=state;
    switch (action.type){
        case 'add':
            return Object.assign({},newState,{
                num:newState.num+1
            })
            break;
        default:
            return state;
    }
}
const store=createStore(reducer)
ReactDOM.render( <Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'))
registerServiceWorker();
