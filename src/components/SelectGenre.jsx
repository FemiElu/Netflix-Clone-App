import React from 'react';
import styled from 'styled-components';
import { fetchDataByGenre, getGenres } from '../store'
import { useDispatch } from 'react-redux';

const SelectGenre = ({ genres, type }) => {
    const dispatch = useDispatch(); 
  return (
    <Select className='flex' onChange={(e)=>dispatch(fetchDataByGenre({ genre:e.target.value, type}))}>
        {genres.map((genre)=>{
            return <option value={genre.id} key={genre.id}>{genre.name}</option>
        })}
    </Select>
  )
}
const Select = styled.div`
    margin-left: 5rem;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: rgba(0,0,0,0.4);
    color:white; 

`
export default SelectGenre