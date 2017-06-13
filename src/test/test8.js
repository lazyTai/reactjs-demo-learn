/*ajax*/
import React from 'react';
import $ from 'jquery'

class Ajax extends  React.Component{
    constructor(props){
        super(props)

        this.state={
            name:""
        }
    }
    componentDidMount(){
        var me=this;
        setTimeout(function () {
            $.get("ajax.json").done(function (res) {
                console.log(res)
                me.setState({
                    name:res.name
                })
            })
        },1000)
    }
    render(){
        return (
            <div>{this.state.name}</div>
        )
    }

}
export  default  Ajax