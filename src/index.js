/*import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// import RButton from "./test/test1.js"
// import RButton from "./test/test2.js"
// import RButton from "./test/test3.js"
// import RButton from "./test/test4.js"
// import RButton from "./test/test5.js"
// import RButton from "./test/test6.js"
// import RButton from "./test/test7.js"
import RButton from "./test/test8.js"

// function tick() {
//     ReactDOM.render(<RButton />, document.getElementById('root'));
// }
// setInterval(tick, 1000);
// tick()
// var data=111
ReactDOM.render(<RButton  />, document.getElementById('root'));
registerServiceWorker();*/


/*路由  一、基本用法*/
/*import React from 'react';
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
registerServiceWorker();*/


/*嵌套路由*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import Menu from  './Menu'
import RButton from  './test/test1'
import Home from  './page/home/home'
import Home1 from  './page/home1/home'
import Home2 from  './page/home2/home'
ReactDOM.render(
    <Router>
        <Route path="/" component={Menu}></Route>
        <Route path="/home1" component={Home1}></Route>
        <Route path="/home2" component={Home2}></Route>
    </Router>
    ,document.querySelector("#root")
)
registerServiceWorker();