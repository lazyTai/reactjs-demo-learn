/*state*/
import React from 'react'
class LikeButton extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            liked:false
        }
        this.handlerClick=this.handlerClick.bind(this);
    }
    handlerClick=function () {
        this.setState({liked:!this.state.liked})
    }
    render(){
        var text=this.state.liked?'like':'not liked';
        return (
            <div>
                <p>{text}</p>
                <button onClick={this.handlerClick}>click</button>
            </div>
        )
    }
}
export default  LikeButton