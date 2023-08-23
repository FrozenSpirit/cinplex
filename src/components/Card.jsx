import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../constants/request'
import { Link } from 'react-router-dom'

const Card = ({movie}) => {

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios.get(requests.requestDrama).then((response) => {
  //     setMovies(response.data.results)
  //   })
  // },[]);

  // const movie = movies[Math.floor(Math.random() * movies.length)];

  

  return (

    <Link to={`/movie/${movie.id}`}>
    <div className='hover:z-[100] z-0 m-5 my-5 cursor-pointer rounded-xl relative w-[150px] h-[230px] md:w-[180px] md:h-[270px] lg:w-[200px] lg:h-[290px] hover:scale-105 duration-200'>

<div className='h-[95%] w-full bg-black/30 absolute hover:bg-black/0' />

<img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} className='rounded-xl h-[95%] w-full obejct-cover'/>


<div className='text-white flex flex-col mt-1'>
  <p className='text-start text-sm md:text-md  font-semibold text-gray-400'>{movie?.title}</p>
  <p className='text-start text-xs md:text-sm  text-gray-400'>{movie?.release_date}</p>
</div>




</div>
    </Link>
    
  )
}

export default Card