import React,{Component} from 'react';
import { connect  } from 'react-redux';
class App extends  Component{
    render(){
        return (
            <div className="app">
                {this.props.num}
                <button onClick={this.props.add}>+</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        num:state.num
    }
}
const  mapDispatchToProps=(dispath)=> {
    return {
        add:()=>{dispath({type:'add'})}
    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(App)