import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Crime = () => {

    const requestURL = requests.requestCrime;
    const title = "Crime"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Crime