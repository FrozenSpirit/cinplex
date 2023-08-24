import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Family = () => {

    const requestURL = requests.requestFamily;
    const title = "Family"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Family