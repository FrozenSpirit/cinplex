
const API_KEY = '4e44d9029b1270a757cddc766a1bcb63&'

const requests = {
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    requestComede: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    requestWar : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    requestThriller:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
    requestCrime:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`, 
    requestDrama:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
    requestAnimation:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    requestFamily:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    requestMystery:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    requestSciFi:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    requestHistory:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`
  };

  export default requests