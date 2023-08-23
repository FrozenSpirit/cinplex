import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const War = () => {

    const requestURL = requests.requestWar;
    const title = "War"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default War