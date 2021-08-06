// import axios from "axios";
import {topscorersEpl, topscorerLaliga, topscorerSerieA, topscorerLigueOne, topscorersBundesliga} from '../requests';
import axios from 'axios';


export const loadTopScorers = () => async (dispatch) =>{

    const header = {
                    method: "GET",
                    headers: {'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
                            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'}
                }
    //FETCH AXIOS
    const topscorersEplData = await axios.request(topscorersEpl(), header);
    const topscorerLaligaData = await axios.request(topscorerLaliga);
    const topscorerSerieAData = await axios.request(topscorerSerieA);
    const topscorerLigueOneData = await axios.request(topscorerLigueOne);
    const topscorersBundesligaData = await axios.request(topscorersBundesliga);

    dispatch({
        type: "GET_TOP",
        payload: {
            topscorersEpl: topscorersEplData.data, 
            topscorerLaliga: topscorerLaligaData.data.response, 
            topscorerSerieA: topscorerSerieAData.data.response, 
            topscorerLigueOne: topscorerLigueOneData.data.response, 
            topscorersBundesliga: topscorersBundesligaData.data.response, 
        }
    })

}