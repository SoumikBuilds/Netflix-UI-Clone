import React from 'react'
import './MovieCard.css'

const MovieCard = ({image, rank}) => {
  return (
    <div className='mc-container'>
        <span>{rank}</span>
        <img src={image} alt="" />
    </div>
  )
}

export default MovieCard