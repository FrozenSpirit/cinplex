import React from 'react'
import requests from '../constants/request'
import GenreMovies from '../pages/GenreMovies'

const History = () => {

    const requestURL = requests.requestHistory;
    const title = "History"

  return (
    <div>
        <GenreMovies title={title} requestURL={requestURL}/>
    </div>
  )
}

export default History