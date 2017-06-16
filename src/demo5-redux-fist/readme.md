```angular2html
//action creator
function loadData(userId){
    return  dispatch => {
        dispatch({type:'LOAD_START'})
        asyncRequest(userId).then(resp=>{
            dispatch({type:'LOAD_SUCCESS',resp})
        }).catch(error=>{
            dispatch({type:'LOAD_FAIL',error})
        })
    }
}

//component
componentDidMount(){
    this.props.dispatch(loadData(this.props.userId));
}
```