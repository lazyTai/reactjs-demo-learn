import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchGetData,clearFetchData} from '../actions/bar'
class Bar extends Component{
    render(){
        const {fetchGetData,fetchData,clearFetchData}=this.props;
        return (
            <div className="bar">
                <button onClick={()=>{fetchGetData()}}>获取数据</button>
                <button onClick={()=>{clearFetchData()}}>qili</button>
                <hr/>
                <div>
                    {
                        fetchData.map(function(item,n){
                            return (
                                <div key={n}><a href={item.url}>
                                    {item.title}
                                </a></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const _state=(state)=>{
    return {
        fetchData:state.bar.json
    }
}
const _dispatch=(dispatch)=>{
    return {
        fetchGetData: ()=>{dispatch(fetchGetData())},
        clearFetchData:()=>{dispatch(clearFetchData())}
    }
}
export  default  connect(_state,_dispatch)(Bar)