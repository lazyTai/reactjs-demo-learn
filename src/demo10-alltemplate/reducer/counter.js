import {INCREASE,DECREASE} from '../constants'
export default  (state={num:0},action)=>{
    switch (action.type){
        case INCREASE:
            return {...state,num:action.num+state.num}
            break;
        case DECREASE:
            return {...state,num:state.num-action.num}
            break;
        default:
            return state;
            break;
    }
}