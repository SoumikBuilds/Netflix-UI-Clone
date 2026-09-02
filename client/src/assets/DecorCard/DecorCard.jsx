import React from 'react'
import './DecorCard.css'

const DecorCard = ({heading, text, graphics}) => {
  return (
    <div className='dc-container'>
        <span className='dc-heading'>{heading}</span>
        <span className='dc-text'>{text}</span>
        <div className="dc-graphics">
            <img src={graphics} alt="" height={72} width={72}/>
        </div>
    </div>
  )
}

export default DecorCard