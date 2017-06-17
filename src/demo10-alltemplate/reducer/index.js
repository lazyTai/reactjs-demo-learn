import counter from './counter';
import foo from './foo';
import bar from './bar';
import {combineReducers} from 'redux';
export  default combineReducers({
    counter,foo,bar
})