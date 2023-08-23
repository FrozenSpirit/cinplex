import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Mystery = () => {

    const requestURL = requests.requestMystery;
    const title = "Mystery"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Mystery