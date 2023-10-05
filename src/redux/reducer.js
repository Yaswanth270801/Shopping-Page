const initialState = {
    count : 0,
    logs: []
}
const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case "add":
            return {...state,count:state.count+1}
        case "del":
            return {...state,count:state.count-1}
        case "addLog":
            return {...state,logs:state.logs.concat(action.newLog)}
        default:
            return state
    }
}

export default rootReducer