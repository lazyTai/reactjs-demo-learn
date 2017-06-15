import React ,{Component} from 'react';
import Input from './input';
import List from './list';

class App extends Component{
    constructor(){
        super()
        this.state={
            lists:[]
        }
    }
    panrent(childState){
        // console.log(childState)
        this.state.lists.push(childState)
        this.setState({
            lists:this.state.lists
        })
    }
    render(){
        return (
            <div>
                <Input sendToParent={this.panrent.bind(this)}></Input>
                <List lists={this.state.lists}></List>
            </div>
        )
    }
}
export  default App