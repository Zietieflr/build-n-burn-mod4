import React from 'react'
import Remove from './Remove'

export default function Bagel({type, rating, id, removeBagel}) {
  return (
    <li>
      <h4>{type}</h4>
      <h5>{rating}</h5>
      <Remove id={id} removeBagel={removeBagel} /> 
    </li>
  )
}