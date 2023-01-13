import React, { useState, useRef } from 'react'; 
import { AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';
import Card from './Card';

const CardSlider = ({ data, title}) => {

    const [showControls, setShowControls] = useState(false); 
    const [sliderPosition, setSliderPosition] = useState(0); 

    const listRef = useRef(); 

    const handleDirection =(direction) =>{
        
    }
  return (
    <Container className='flex column'
        onMouseEnter={()=>setShowControls(true)}
        onMouseLeave={()=>setShowControls(false)}
    >
        <h1>{title}</h1>
        <div className='wrapper'>
            <div className={`slider-action left ${!showControls ? "none": ""} flex j-center a-center`}>
                <AiOutlineLeft onClick={()=>handleDirection("left")}/>
            </div>
        </div>
        <div className="flex">
        {
            data.map((movie,index)=> {
                return <Card movieData = {movie} index={index} key={movie.id}/>            })
        }
        </div>
    </Container>
  )
}

const Container = styled.div`
    
`
export default CardSlider