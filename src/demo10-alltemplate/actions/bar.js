import {FETCHGETDATA,
    FETCHGETDATA_SUCCESS,
    FETCHGETDATA_ERROR,
    CLEARFETCHDATA
} from '../constants';
import fetch from 'isomorphic-fetch'


const createAction_FETCHGETDATA_SUCCESS=(json)=>{
        return {
            type:FETCHGETDATA_SUCCESS,
            json,
            success:true
        }
}
const createAction_FETCHGETDATA_ERROR=(json)=>{
    return {
        type:FETCHGETDATA_ERROR,
        success:false,
        json
    }
}
export const clearFetchData=()=>{
    return {
        type:CLEARFETCHDATA,
    }
}
export  const fetchGetData=()=>(dispath,getState)=>{
         return fetch('json.json').then((res)=>{return res.json()})
            .then((json)=>{
             ;dispath(createAction_FETCHGETDATA_SUCCESS(json))})
            .catch((e)=>{console.error(e);dispath(createAction_FETCHGETDATA_ERROR("失败"))})

}


