import React,{Component} from 'react';
import {createStore} from 'redux';

import {connect} from 'react-redux'


class App extends Component{
    constructor(props){
        super(props)
        this.state={input:''}
        this.inChange=this.inChange.bind(this)
        this.pushTodo=this.pushTodo.bind(this)
    }
    inChange(e){
      this.setState({input:e.target.value})
    }
    pushTodo(){
        if(this.state.input=='')return false;
        this.props.pushTodo(this.state.input)
        this.setState({input:''})
    }
    render(){
        return (<div className="app">
            <input onChange={this.inChange} value={this.state.input}></input><button onClick={this.pushTodo}>push</button>
            <div className="counter">{this.props.couter}</div>
            <div className="todo">{
                this.props.todos.map(function (item,i) {
                   return  (<div key={i}>{item.content}</div>)
                })
            }</div>
        </div>)
    }}

    var _state=(state)=>{
        return {
            todos:state.todos,
            couter:state.couter
        }
    }
    var _dispatch=(dispatch)=>{
        return {
            pushTodo:(content)=>{
                dispatch({
                type:'PUSHTODO',
                todo:{
                    content:content
                }
            })}
        }
    }
    export  default connect(_state,_dispatch)(App)


