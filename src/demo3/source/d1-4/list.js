import React ,{Component} from 'react';

class list extends Component{
    static defaultProps={
        lists:[]
    }
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.lists.map(function (item,i) {
                    return (
                        <div  key={i}>
                            <div>name:{item.name}</div>
                            <div>content:{item.content}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export  default list