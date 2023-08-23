import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Thriller = () => {

    const requestURL = requests.requestThriller;
    const title = "Thriller"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Thriller