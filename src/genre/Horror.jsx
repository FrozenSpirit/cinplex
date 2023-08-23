import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Horror = () => {

    const requestURL = requests.requestHorror;
    const title = "Horror"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Horror