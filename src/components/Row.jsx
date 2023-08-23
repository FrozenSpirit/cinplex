import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




const Row = ({rowID, title, requestURL}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response.data.results)
    })
  }, []);

  const slideRight = () =>{ 
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
};

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <div className='ml-3 mt-'>

        <h1 className='text-xl md:text-2xl lg:text-3xl text-white font-semibold text-start ml-3 mt-2'>{title}</h1>

        <div className='w-full flex items-center  relative group'>

          <FontAwesomeIcon icon={faArrowLeft} className='absolute left-1 text-xl md:text-2xl lg:text-3xl bg-white/50 hover:bg-white z-[10] p-1 rounded-full opacity-0 group-hover:opacity-100' onClick={slideLeft}/>

          <div id={'slider' + rowID} className='w-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>


            
            {movies.map((movie, index) => (
              <Link to={`/movie/${movie.id}`}>
              <div className='w-[160px]  sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative  mx-2 my-3 rounded-xl'>
                <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie.title} className=' object-cover' />

                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white hover:scale-105 duration-200 flex justify-center items-center'>
                    <p className=' w-full h-full text-center white-space-normal text-xs md:text-sm lg:text-sm font-bold flex justify-center items-center'>
                      {movie?.title}
                    </p>
                </div>

              </div>
              </Link>
            ))}

          </div>


          <FontAwesomeIcon icon={faArrowRight} className='absolute right-1 text-xl md:text-2xl lg:text-3xl bg-white/50 hover:bg-white z-[10] p-1 rounded-full opacity-0 group-hover:opacity-100' onClick={slideRight} />


        </div>

    </div>
  )
}

export default Row