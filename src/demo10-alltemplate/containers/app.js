import React ,{Component} from 'react';
import MyTab from './tab'
class App extends  Component{
    render() {
        return (
            <div className="App">
                <MyTab className="tab"></MyTab>
                <div className="container">
                    {this.props.children|| "Welcome to your Inbox"}
                </div>
            </div>
        )
    }

}

export default App
