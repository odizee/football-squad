const initState = {
    team:  {squad: []},  
    isLoading: true,
}

const detailReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return {...state, 
                    team: action.payload.team,
                    isLoading: false   
            }
            case "LOADING_DETAIL":
                return {
                    ...state,
                    isLoading: true,
                }
        default:
            return {...state}
    }
}

export default detailReducer;