import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Fetch = (genre) => {

  console.log(genre)
  console.log('Hello');

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(genre).then((response) => {
      setMovies(response.data.results)
    })
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log(movie);

  return (
    <div className='w-[200px] h-[300px]'>

      <div className='text-white text-3xl '>
        Hello
      </div>
      
      <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie?.title} className='w-full h-full object-cover' />
    </div>
  )
}

export default Fetch