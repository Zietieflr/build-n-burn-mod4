import React from 'react'

export default function remove({ id, removeBagel }) {
  
  const handleClick = (event, id) => {
    event.stopPropagation()
    removeBagel(id)
  }
  
  return (
    <button onClick={(event) => handleClick(event, id)}>ⓧ</button>
  )
}