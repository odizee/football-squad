import axios from 'axios';
import {TeamDetails} from '../requests';


export const loadDetail = (id) => async (dispatch) =>{

    dispatch({
        type: "LOADING_DETAIL"
    })
    const header = {
                    method: "GET",
                    headers: {'X-Auth-Token': 'cbe7abaa1c2840a9b954659ef2ebdddb'}
                }
    const detailData = await axios.request(TeamDetails(id), header);

    dispatch({
        type: "GET_DETAIL",
        payload: {
            team: detailData.data,
        },

    });
}