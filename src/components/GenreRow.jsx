import React from 'react'
import { Link } from 'react-router-dom'

const GenreRow = () => {
  return (
    <div>
        <div className='w-full h-[50px] text-white my-3'>

            <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide py-3'>

                <Link to={`/movies/action`} className='px-3 bg-red-600 py-2 mx-3 '>
                    <button>Action</button>
                </Link>

                <Link to={`/movies/animation`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Animation</button>
                </Link>
                <Link to={`/movies/comedy`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Comedy</button>
                </Link>
                <Link to={`/movies/crime`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Crime</button>
                </Link>
                <Link to={`/movies/drama`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Drama</button>
                </Link>
                <Link to={`/movies/family`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Family</button>
                </Link>
                <Link to={`/movies/history`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>History</button>
                </Link>
                <Link to={`/movies/horror`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Horror</button>
                </Link>

                <Link to={`/movies/mystery`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Mystery</button>
                </Link>
                <Link to={`/movies/romance`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Romance</button>
                </Link>
                <Link to={`/movies/scifi`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Sci Fi</button>
                </Link>

                <Link to={`/movies/thriller`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>Thriller</button>
                </Link>
                <Link to={`/movies/war`} className='px-3 bg-red-600 py-2 mx-3'>
                    <button>War</button>
                </Link>



                
            </div>

        </div>
    </div>
  )
}

export default GenreRow