import React from 'react'

export default function remove({ id, removeBagel }) {
  
  const handleClick = (event, id) => {
    event.stopPropagation()
    removeBagel(id)
  }
  
  return (
    <button className='remove-bagel' onClick={(event) => handleClick(event, id)}>𝖷</button>
  )
}