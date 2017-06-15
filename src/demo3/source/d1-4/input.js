

import React ,{Component} from 'react';

class input extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            content:""
        }
    }
    nameChnage(e){
        this.setState({
            name:e.target.value
        })
    }
    contentChnage(e){
        this.setState({
            content:e.target.value
        })
    }
    clickSend(){
        const {name,content} =this.state
        this.props.sendToParent({name,content} )
        this.setState({
            name:'',
            content:""
        })
    }
    render(){
        return (
            <div>
                <div>
                    <span>用户名：</span>
                    <input type="text" value={this.state.name} onChange={this.nameChnage.bind(this)}/>
                </div>
                <div>
                    <span>评论内容：</span>
                    <input type="text" value={this.state.content} onChange={this.contentChnage.bind(this)}/>
                </div>
                {/*向父组件传递数据*/}
                <button onClick={this.clickSend.bind(this)}>send</button>
            </div>
        )
    }
}
export  default input