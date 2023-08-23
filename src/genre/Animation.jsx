import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Animation = () => {

    const requestURL = requests.requestAnimation;
    const title = "Animation"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Animation