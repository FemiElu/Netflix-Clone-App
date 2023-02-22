import React, { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getGenres,fetchMovies } from '../store';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { firbaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';

const Movies = () => {
    
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state)=>state.netflix.movies);
  const genres = useSelector((state)=>state.netflix.genres);
  
  
  const dispatch = useDispatch(); 


    useEffect(()=>{
      dispatch(getGenres())
    },[])

   

    useEffect(()=>{
      if(genresLoaded) dispatch(fetchMovies({ type:"tv" }))
    },[])
    
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0? false: true); 
    return () =>(window.onscroll = null); 
  }; 

  useEffect(()=>{
    onAuthStateChanged(firbaseAuth,(currentUser)=>{
        if(currentUser) navigate('/')
      })
  })
  

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="tv"/>
            {
                movies.length ?<Slider movies={movies} />:<NotAvailable/>
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
    .data {
        margin-top: 8rem;
        .not-available{
            text-align: center;
            color:white; 
            margin-top: 4rem;
        }
    }
`
export default Movies


