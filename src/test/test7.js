/*生命周期*/
import React from 'react';

class HelloWorld extends React.Component{
    constructor(props){
        super(props)

        this.state={opacity:1}
    }
    componentDidMount(){
            var me=this;
            setInterval(function () {
                var opacity=me.state.opacity;
                opacity -=0.2;
                if(opacity<0.1){
                    opacity=1
                }
                me.setState({opacity:opacity})
            },500)
    }
    render(){
        return (
            <h1 style={{opacity:this.state.opacity}}>hello</h1>
        )
    }
}
export  default HelloWorld