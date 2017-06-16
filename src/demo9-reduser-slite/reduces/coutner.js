export  default (state=0,action)=>{
    switch (action.type){
        case "ADD":
            return {...state,num:state}
            break;
        default:
            return state;
    }
}
