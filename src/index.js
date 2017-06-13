import React from 'react';
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
registerServiceWorker();
