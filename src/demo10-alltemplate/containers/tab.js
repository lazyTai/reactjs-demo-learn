import React,{Component} from 'react'
import {Link} from 'react-router';

var activeStyle={
    color:"#555",
    background:"#e7e7e7"
}
var tabStyle={
    display:'flex',
    marginLeft:"10px",
    justifyContent:'spaceBetween'
}
const MyTab=(props)=>(
    <div className="tab" style={tabStyle}>
        <div>
            <Link to="/index" activeStyle={activeStyle}>index</Link>
        </div>
        <div>
            <Link to="/foo" activeStyle={activeStyle}>foo</Link>
        </div>
        <div>
            <Link to="/bar" activeStyle={activeStyle}>bar</Link>
        </div>
        <div>
            <Link to="/antd" activeStyle={activeStyle}>antd</Link>
        </div>
    </div>
)
export  default  MyTab