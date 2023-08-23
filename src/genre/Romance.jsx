import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Romance = () => {

    const requestURL = requests.requestRomance;
    const title = "Romance"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Romance