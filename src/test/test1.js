import React from 'react';

class RButton extends React.Component{
    handleClick(){
        console.log('click ')
    }
    render(){
        return (
            <input type="button" value="click me " onClick={this.handleClick} />
        )
    }
}
export  default  RButton