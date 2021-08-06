// import axios from "axios";
import {epl, laliga, ligueOne, bundesliga, SerieA, topscorersEpl, topscorerLaliga, topscorerSerieA, topscorerLigueOne, topscorersBundesliga, searchTeams} from '../requests';
import axios from 'axios';



export const loadTeams = () => async (dispatch) =>{

    dispatch({
        type: "LOADING_TEAM"
    })

    const header = {
                    method: "GET",
                    headers: {'X-Auth-Token': 'cbe7abaa1c2840a9b954659ef2ebdddb'}
                }
    const header1 = {
                    method: "GET",
                    headers: {'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403','x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
                }
    //FETCH AXIOS
    const eplData = await axios.request(epl(), header);
    const laligaData = await axios.request(laliga(), header);
    const ligueOneData = await axios.request(ligueOne(), header);
    const bundesligaData = await axios.request(bundesliga(), header);
    const SerieAData = await axios.request(SerieA(), header);
    //Top Scorers
    const topscorersEplData = await axios.request(topscorersEpl(), header1);
    const topscorerLaligaData = await axios.request(topscorerLaliga(), header1);
    const topscorerSerieAData = await axios.request(topscorerSerieA(), header1);
    const topscorerLigueOneData = await axios.request(topscorerLigueOne(), header1);
    const topscorersBundesligaData = await axios.request(topscorersBundesliga(), header1);
    console.log(topscorersEplData)

    dispatch({
        type: "FETCH_TEAMS",
        payload: {
            englishTeams: eplData.data.teams, 
            laligaTeams: laligaData.data.teams, 
            ligueOneTeams: ligueOneData.data.teams, 
            bundesligaTeams: bundesligaData.data.teams, 
            SerieATeams: SerieAData.data.teams,
            topscorersEpl: topscorersEplData.data.response[0], 
            topscorerLaliga: topscorerLaligaData.data.response[0], 
            topscorerSerieA: topscorerSerieAData.data.response[0], 
            topscorerLigueOne: topscorerLigueOneData.data.response[0], 
            topscorersBundesliga: topscorersBundesligaData.data.response[0], 
        }
    })

}


export const fecthSearched = (player_name) => async (dispatch) =>{

   const header = {
       method: "GET",
       headers: {
    'x-rapidapi-key': '9f5846121de21c268b84d706a042cfe8',
       }
  };


    //FETCH AXIOS
    const searchTeamsData = await axios.request(searchTeams(player_name), header);
    console.log(searchTeamsData.data.response)
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searchTeams: searchTeamsData.response, 
            }
        })
    
}