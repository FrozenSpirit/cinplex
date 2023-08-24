import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Drama = () => {

    const requestURL = requests.requestDrama;
    const title = "Drama"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Drama