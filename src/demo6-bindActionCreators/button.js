import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


class SomeComponent extends Component{
    render(){
        let {addaction} =this.props;
        return (
            <button className="button" onClick={addaction}>
                add
            </button>
        )
    }
}


export  default  SomeComponent
