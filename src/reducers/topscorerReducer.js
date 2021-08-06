const initState = {
    topscorersEpl:  {},
    topscorerLaliga: {},
    topscorerSerieA: {},
    topscorerLigueOne:  {},
    topscorersBundesliga:  {},
}


const topscorerReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_TOP":
            return {...state, 
                topscorersEpl: action.payload.topscorersEpl,
                topscorerLaliga: action.payload.topscorerLaliga,
                topscorerSerieA: action.payload.topscorerSerieA,
                topscorerLigueOne: action.payload.topscorerLigueOne,
                topscorersBundesliga: action.payload.topscorersBundesliga,            
            }
        default:
            return {...state}
    }
};

//ACTION CREATORS


export default topscorerReducer;