import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import MyButton from './button'

function actionCreator(aaa) {
    return {
        type:'add',
        load:aaa
    }
}
class SomeComponent extends Component{
    render(){
        let {dispatch} = this.props;
        var addacion=bindActionCreators(actionCreator,dispatch);
        console.log(addacion)
        return (
            <div className="someCom">
                {this.props.num}
                <MyButton addaction={addacion}></MyButton>
            </div>
        )
    }
}
var dispathProps=(dispath)=>{
    return {add:()=>dispath(actionCreator('1'))}
}


export  default  connect((state)=>{return {num:state.num}})


(SomeComponent)
