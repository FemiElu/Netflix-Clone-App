import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Signup from './pages/Signup';
import TvShows from './pages/TvShows';

const App = () => {
  return (
    <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/player' element={<Player/>} />
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/tv' element={<TvShows/>}/>
      <Route exact path='/' element={<Netflix/>} />
    </Routes>
    
  )
}

export default App
