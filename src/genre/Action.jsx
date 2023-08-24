import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const Action = () => {

    const requestURL = requests.requestAction;
    const title = "Action"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default Action