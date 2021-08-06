
// const URL = 'https://api.football-data.org/v2/';
// const instance = axios.create({ 
//     baseURL: URL,
//     method: 'GET',
//     headers: {
//         'X-Auth-Token': 'cbe7abaa1c2840a9b954659ef2ebdddb',
//     },
// });

// export default instance;

const instance = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/',
  params: {season: '2020'},
  headers: {
    'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
};

export default instance;

