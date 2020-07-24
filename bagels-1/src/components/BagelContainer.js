import React from 'react'
import Bagel from './Bagel'

export default function BagelContainer({ bagels, removeBagel }) {
  const renderBagels = (bagels) => {
    return bagels.map(bagel => <Bagel key={bagel.id} {...bagel} removeBagel={removeBagel} />)
  }
  
  return (
    <ul>
      {renderBagels(bagels)}
    </ul>
  )
}