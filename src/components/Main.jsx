import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import requests from '../constants/request'


const Main = ({requestURL}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      
      setMovies(response.data.results)
    })
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  // console.log(movie);

  return (
    <section className='relative h-[600px] w-full'>

        

        <Carousel className='w-full h-[600px] absolute' showIndicators={false} autoPlay={true}  showThumbs={false} infiniteLoop={true} showStatus={false} interval={5000} showArrows={false}>

          {movies.map((movie, index) => (
            <div key={index}>
              <div className='w-full h-[600px] bg-gradient-to-r from-black absolute' />

              <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie?.title} className='w-full -z-[10] h-[600px] object-cover' />

              <div className='absolute top-[55%] left-3 md:left-10 flex flex-col justify-start'>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white flex  text-start'>{movie?.title}</h1>

                <div className='my-3  flex justify-start items-center scale-80 md:scale-100'>
                  <button className='text-white bg-gray-400/50 mt-2 px-3 py-2 lg:px-5 mr-2 border border-gray-300/50 hover:bg-gray-400'> Play</button>
                  <button className='text-white bg-gray-400/50 mt-2 px-3 py-2 lg:px-5 border border-gray-300/50 hover:bg-gray-400'> Watch Later</button>
                </div>

                <p className='text-gray-400 text-sm text-start'>
                  Released: {movie?.release_date}
                </p>

                <p className='w-[90%] mt-2 md:max-w-[70%] lg:max-w-[55%] xl:max-w-[45%] text-gray-200 line-clamp-3 text-start'>
                {movie?.overview}
                </p>
              </div>
            </div>

          ))}

        </Carousel>

        

    </section>
  )
  
}

export default Main