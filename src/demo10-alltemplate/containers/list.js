import React ,{Component} from 'react';
import {connect} from 'react-redux'
class List extends Component{
    render(){
        return (
            <div className="lists">
                {
                    this.props.lists.map(function(item,i){
                        return (
                            <div key={i}>{item.text}</div>
                        )
                    })
                }
            </div>
        )
    }
}
var _state=(state)=>{
    return {lists:state.foo.lists}
}
export  default connect(_state)(List)