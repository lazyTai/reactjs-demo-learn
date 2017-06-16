import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


// import App from './demo2-github-profil/page/app/App';
// import App from './demo3/source/d1-4/App.js'

// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();

import configStore from './demo4-redux-configStore/stores'
import {Provider} from 'react-redux'
import {Router,Route} from 'react-router'
import App from './demo4-redux-configStore/container/app.js'


const store =configStore()

ReactDOM.render( <Provider store={store}>
    <Router>
        <Route path="/" component={App}>
            <Route path="/home"></Route>
        </Route>
    </Router>
</Provider>, document.getElementById('root'))
registerServiceWorker();
