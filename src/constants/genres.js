import axios from "axios";
import { useEffect, useState } from "react";

const handel = 'ljksdf'

const API_KEY = '4e44d9029b1270a757cddc766a1bcb63'

const TRENDING_MOVIE = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
const DISCOVER_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const TOP_RATED_MOVIE = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
const POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

// --------------MOVIE GENRE---------------
const ACTION_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
const HORROR_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
const ROMANCE_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const COMEDY_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
const WAR_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`;
const THRILLER_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`;
const CRIME_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`;
const DRAMA_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`;
const FAMILY_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`;
const ANIMATION_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`;
const MYSTERY_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`;
const SCIFI_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`;
const WESTERN_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`;
const HISTORY_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`;

// --------------------Video-------------
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${handel}?api_key=${API_KEY}&language=en-US`;
const MOVIE_VIDEO_URL = `https://api.themoviedb.org/3/movie/${handel}/videos?api_key=${API_KEY}&language=en-US`;
const MOVIE_CREW = `https://api.themoviedb.org/3/movie/${handel}/credits?api_key=${API_KEY}&language=en-US`;


    
export const genres = [TRENDING_MOVIE,
    
    TOP_RATED_MOVIE,
    POPULAR ];
