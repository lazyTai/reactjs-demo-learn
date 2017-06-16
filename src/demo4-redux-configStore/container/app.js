import React,{Component} from 'react';
export default class App extends Component{
    render(){
        return (<div className="app">
            <h1>app</h1>
            <div class="router-view">
                {this.props.children}
            </div>
        </div>)
    }
}