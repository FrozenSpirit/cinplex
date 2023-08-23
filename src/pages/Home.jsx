import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../constants/request'
import Footer from '../components/Footer'
import GenreRow from '../components/GenreRow'



const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Main title={'Home'} requestURL={requests.requestTopRated}/>
      
     <GenreRow/>

      <Row rowID='1' title={'Up-Coming'} requestURL={requests.requestUpcoming}/>
      <Row rowID='2' title={'Trending'} requestURL={requests.requestTrending}/>
      <Row rowID='3' title={'Top Rated'} requestURL={requests.requestTopRated}/>
      <Row rowID='4' title={'Popular'} requestURL={requests.requestPopular}/>
      <Row rowID='5' title={'Western'} requestURL={requests.requestWestern}/>
      <Footer/>
      
      {/* <GenreMovies/> */}
      {/* <MovieDetails/> */}
    </div>
  )
}

export default Home