/**
 * 默认的属性
 * defaultProps
 */
import React from 'react';
class RButton extends  React.Component{
    propTypes:{
        title:React.PropTypes.string.isRequired,
}
    static get defaultProps(){
        return {
            title:'默认'
        }
    }
    render(){
        return  (
            <div>
                <p>{this.props.title}</p>



                </div>
        )
    }
}

export  default  RButton