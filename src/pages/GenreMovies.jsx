import React, {useEffect, useState} from 'react'
import requests from '../constants/request'
import Main from '../components/Main'
import Card from '../components/Card'
import axios from 'axios'
import Footer from '../components/Footer'
import PagesNavbar from '../components/PagesNavbar'
import GenreMain from '../components/GenreMain'

const GenreMovies = ({requestURL}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setMovies(response.data.results)
    })
    window.scrollTo(0, 0)
  }
  
  , []);

  console.log(movies);

  return (
    <div >

      <PagesNavbar/>

      <Main title={'Hello'} requestURL={requestURL} />

      <div className='w-full my-5  grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center'>
        {movies.map(movie => <div className='w-full flex justify-center'><Card movie={movie}/></div>)}
      </div>
      
      <Footer/>
    </div>
  )
}

export default GenreMovies