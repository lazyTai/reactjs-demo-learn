/**
 * Created by Administrator on 2017/6/13 0013.
 */
/*form*/

import React from 'react';

class MyInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'aaaa'
        }
        this.onChangeInput=this.onChangeInput.bind(this)
    }
    onChangeInput(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text"  onChange={this.onChangeInput}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
export default  MyInput