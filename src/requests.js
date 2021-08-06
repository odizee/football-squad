const year = new Date().getFullYear() - 1

const base_url = "https://api.football-data.org/v2/";

export const epl = () => `${base_url}competitions/PL/teams`;

export const laliga = () => `${base_url}competitions/PD/teams`;

export const ligueOne = () => `${base_url}competitions/FL1/teams`;

export const bundesliga = () => `${base_url}competitions/BL1/teams`;

export const SerieA = () => `${base_url}competitions/SA/teams`;

export const TeamDetails = (id) => `${base_url}teams/${id}`;

export const searchTeams = (player_name) => `https://v3.football.api-sports.io/players?search=${player_name}&season=2020&team=33`;

export const topscorersEpl = () => `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=${year}`;

export const topscorerLaliga = () => `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=140&season=${year}`;

export const topscorerSerieA = () => `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=135&season=${year}`;

export const topscorerLigueOne = () => `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=61&season=${year}`;

export const topscorersBundesliga = () => `https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=78&season=${year}`;

// https://v3.football.api-sports.io/players?id=276&season=2019


// export const topscorersEpl = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '39', season: '2020'},
//   headers: {
//     'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// export const topscorerLaliga = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '140', season: '2020'},
//   headers: {
//     'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// export const topscorerSerieA = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '135', season: '2020'},
//   headers: {
//     'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// export const topscorerLigueOne = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '61', season: '2020'},
//   headers: {
//     'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// export const topscorersBundesliga = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '78', season: '2020'},
//   headers: {
//     'x-rapidapi-key': '67cba16395msh1b56d57ea9727a4p16d753jsnb026029b7403',
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };