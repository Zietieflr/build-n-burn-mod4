import React from 'react'

export default function Bagel({type, rating, id}) {
  return (
    <li>
      <h4>{type}</h4>
      <h5>{rating}</h5>
    </li>
  )
}