const initState = {
    eplTeams:  [],
    laligaTeams: [],
    ligueOneTeams: [],
    bundesligaTeams:  [],
    SerieATeams:  [],
    topscorersEpl: {player: [], statistics: {0 : {team: [], goals: []}}},
    topscorerLaliga: {player: [], statistics: {0 : {team: [], goals: []}}},
    topscorerSerieA: {player: [], statistics: {0 : {team: [], goals: []}}},
    topscorerLigueOne: {player: [], statistics: {0 : {team: [], goals: []}}},
    topscorersBundesliga: {player: [], statistics: {0 : {team: [], goals: []}}},
    searched: [],
    isLoading: true,
}


const footballReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_TEAMS":
            return {...state, 
                eplTeams: action.payload.englishTeams,
                laligaTeams: action.payload.laligaTeams,
                ligueOneTeams: action.payload.ligueOneTeams,
                bundesligaTeams: action.payload.bundesligaTeams,
                SerieATeams: action.payload.SerieATeams,            
                // TeamDetails: action.payload.TeamDetails,            
                topscorersEpl: action.payload.topscorersEpl,            
                topscorerLaliga: action.payload.topscorerLaliga,            
                topscorerSerieA: action.payload.topscorerSerieA,            
                topscorerLigueOne: action.payload.topscorerLigueOne,            
                topscorersBundesliga: action.payload.topscorersBundesliga, 
                // searched: action.payload.searched,
                isLoading: false,           
            }
            case "LOADING_TEAM":
                return {
                    ...state,
                    isLoading: true,
                }
            case "FETCH_SEARCHED":
                return {
                    ...state,
                    searched: action.payload.searched,
                    isLoading: true,
                }
        default:
            return {...state}
    }
};

//ACTION CREATORS


export default footballReducer;