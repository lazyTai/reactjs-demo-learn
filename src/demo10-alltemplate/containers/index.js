import React ,{Component} from 'react';
import {connect} from 'react-redux';
import{increase,decrease} from '../actions/count'
import {browserHistory} from 'react-router'
class Home extends  Component{
    constructor(props){
        super(props);

        this._increase=this._increase.bind(this);
        this._decrease=this._decrease.bind(this)
    }
    _increase(){
        this.props.increase(1)
    }
    _decrease(){
        this.props.decrease(1)
    }
    render() {
        const {num} =this.props;
        return (
            <div className="Index">
                {num}
                {' '}
                <button onClick={this._increase}>+</button>
                {' '}
                <button onClick={this._decrease}>-</button>
                {<br/>}
                <button type="button" className onClick={() => browserHistory.push('/foo')}>跳转到 /foo</button>
            </div>
        )
    }

}
const _state=(state)=>{return {num:state.counter.num}}
const _dispath=(dispath)=>{
    return {
        increase:(num)=>{dispath(increase(num))},
        decrease:(num)=>{dispath(decrease(num))}
    }
}
export default connect(_state,_dispath)(Home)