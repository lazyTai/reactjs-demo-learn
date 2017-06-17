import React ,{Component} from 'react';
import Mock from 'mockjs';
var Random =Mock.Random;
var oldLists=[
    {left:0,majina:'1'},
    {left:1*40,majina:'2'},
    {left:2*40,majina:'3'},
    {left:3*40,majina:'4'},
    {left:4*40,majina:'5'},
    {left:5*40,majina:'6'}
]
var newlists=Random.shuffle(oldLists);
console.log(newlists)

export default ()=>(
    <div className="majian">

    </div>
)