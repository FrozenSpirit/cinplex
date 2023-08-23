import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Comedy = () => {

    const requestURL = requests.requestComede;
    const title = "Comedy"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Comedy