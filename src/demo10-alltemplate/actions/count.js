import {INCREASE,DECREASE} from '../constants'

export const increase=n=>{
    return{
        type:INCREASE,
        num:n
    }
}

export const decrease=n=>{
    return{
        type:DECREASE,
        num:n
    }
}