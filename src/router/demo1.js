/*基本用法*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker';

import App from '../App.js'
import RButton from "../test/test1.js"

import {Router,Route,hashHistory} from 'react-router'
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/button" component={RButton}></Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();