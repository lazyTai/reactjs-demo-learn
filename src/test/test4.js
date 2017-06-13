/**
 * 与真实的DOM交互
 * ref的使用
 */
import React from  'react';


class MyInput extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        console.log(this);
    }
    handleClick(){
        console.log(this);
        this.refs.myTextInput.focus()
    }
    render(){
        return (
            <div>
                <input type="text" ref="myTextInput"/>
                <input type="button" value="focus" onClick={this.handleClick}/>
            </div>
        )
    }
}

export  default  MyInput