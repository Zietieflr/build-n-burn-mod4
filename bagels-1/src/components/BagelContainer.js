import React from 'react'
import Bagel from './Bagel'

export default function BagelContainer({ bagels }) {
  const renderBagels = (bagels) => {
    return bagels.map(bagel => <Bagel key={bagel.id} {...bagel} />)
  }
  
  return (
    <ul>
      {renderBagels(bagels)}
    </ul>
  )
}