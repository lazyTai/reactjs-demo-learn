import {
    FETCHGETDATA,
    FETCHGETDATA_SUCCESS,
    FETCHGETDATA_ERROR,
    CLEARFETCHDATA
} from '../constants';

var initState={
    success:false,
    json:[]
}
export default (state=initState,action)=>{

    switch (action.type){
        case FETCHGETDATA_SUCCESS:
            return {
                ...state,
                success:action.success,
                json:action.json
            }
            break;
        case FETCHGETDATA_ERROR:
            return {
                ...state,
                success:action.success,
                json:action.json
            }
            break;
        case CLEARFETCHDATA:
            return {
                ...state,
                success:'',
                json:[]
            }
            break;

        default:
            return state
            break;
    }
}