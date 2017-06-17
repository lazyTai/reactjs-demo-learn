
import React ,{Component} from 'react';
import {Route,Routes} from 'react-router';

import App from '../containers/app.js'
import Index from '../containers/index.js'
import Foo from '../containers/list.js'
import Majian from '../containers/majian.js'
import bar from '../containers/bar.js'
import L404 from '../containers/404.js'

const routes = {
    path: '/',
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace('/index') },
    childRoutes: [
        { path: '/index', component: Index },
        { path: '/foo', component: Foo },
        { path: '/majian', component: Majian },
        { path: '/bar', component: bar },
        { path: '*', component: L404}
    ]
};
export default  routes;