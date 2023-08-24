import React, {useState, useEffect} from 'react'
import requests from '../constants/request'
import axios from 'axios'
import PagesNavbar from '../components/PagesNavbar';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const [movie, setMovie] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    

    console.log(movie)

  return (
    <div>

        <PagesNavbar/>
        

        <div className='absolute h-screen m w-full '>

            <div className='h-full w-full bg-gradient-to-r from-black/80 absolute' />
                
            <img className="w-full h-full object-cover " src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title}
                
            />

            <div className='absolute  top-[50%] sm:top-[50%] left-[5%] w-[90%]  flex gap-3'>

                <div className=' flex flex-col justify-center items-center w-[180px] h-[200px] sm:w-[150px] sm:h-[230px] md:w-[180px] md:h-[250px] lg:w-[200px] lg:h-[290px] '>
                    <img className="w-full h-full object-cover " src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} />
                </div>

                <div className='w-full flex flex-col'>

                    
                        <p className='text-left text-3xl text-white md:mt-3'>{movie?.title}</p>
                        <p className='text-left text-white md:mt-3'>{movie?.release_date}</p>
                        <p className='text-white text-left md:mt-3'>Rating: {Math.round(movie?.vote_average * 10)/10}</p>
                        <p className='text-white text-left md:mt-3'> Original Laguage : {movie?.original_language}</p>

                        <div className='flex items-center flex-wrap'>
                            {
                                movie && movie.genres ? movie.genres.map(genre => (
                                    <> <span className='text-white text-left md:mt-3 px-2 py-1 rounded-2xl mr-0 sm:mr-2 md:mr-2 border-2 border-white my-1' key={genre.id}>{genre.name}</span></>
                                ))
                                :
                                ""

                            }

                        </div>

                        <p className='text-white text-left line-clamp-5 md:mt-3'>{movie?.overview}</p>
                    

                </div>
            </div>
        </div>

    </div>
  )
}

export default MovieDetails