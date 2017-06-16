import React,{Component} from 'react';
import {connect} from 'react-redux'
import {createStore} from 'redux'
import fetch from 'isomorphic-fetch'
const postAction=posturl=>(dispath,getState)=>{
    dispath({type:'ADDLOGING',success:'lodding'})
    dispath({type:'add',success:'lodding'})
    return fetch(posturl).then(res=>{return res.json()})
        .then(json=>{dispath({type:'ADDSUCCESS',num:json.num,success:'success'})})
}

class SomeComponent extends  Component{
    render(){
        return (
            <div className="app">
                <h1>{this.props.num}</h1>
                <button onClick={this.props.add}>change</button>
            </div>
        )
    }
}
const _state=(state)=>{return {num:state.num}}
const _action=(dispatch)=>{return {add:()=>{dispatch(postAction('http://localhost:3000/json.json'))}}}

export  default  connect(_state,_action)(SomeComponent)

