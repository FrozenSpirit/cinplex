import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Action from './genre/Action';
import Animation from './genre/Animation'
import Comedy from './genre/Comedy'
import Crime from './genre/Crime'
import Drama from './genre/Drama'
import Family from './genre/Family'
import History from './genre/History'
import Horror from './genre/Horror'
import Mystery from './genre/Mystery'
import Romance from './genre/Romance'
import Scifi from './genre/Scifi'
import Thriller from './genre/Thriller'
import War from './genre/War'
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">

      {/* <Action/> */}
        
        <Router>
          <Routes>

            <Route path='/' element = {<Home/>}/>

            <Route path='movie/:id' element = {<MovieDetails/>}></Route>
            
            <Route path='/movies/action' element={<Action/>}/>
            <Route path='/movies/animation' element={<Animation/>}/>
            <Route path='/movies/comedy' element={<Comedy/>}/>
            <Route path='/movies/crime' element={<Crime/>}/>
            <Route path='/movies/drama' element={<Drama/>}/>
            <Route path='/movies/family' element={<Family/>}/>
            <Route path='/movies/history' element={<History/>}/>
            <Route path='/movies/horror' element={<Horror/>}/>
            <Route path='/movies/mystery' element={<Mystery/>}/>
            <Route path='/movies/romance' element={<Romance/>}/>
            <Route path='/movies/scifi' element={<Scifi/>}/>
            <Route path='/movies/thriller' element={<Thriller/>}/>
            <Route path='/movies/war' element={<War/>}/>

          </Routes>

        </Router>

    </div>
  );
}

export default App;
