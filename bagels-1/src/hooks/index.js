import React, { useEffect, useState } from 'react';
import { boilerGET, boilerFetch } from '../helpers/functions'
import { url } from '../helpers/urls'

export function useBagelsAPI() {
  const [ bagels, setBagels ] = useState({})
  
  useEffect(() => {
    boilerGET(url('bagels'))
      .then(results => setBagels(results))
  }, [])

  const removeBagel = (id) => {
    boilerFetch(`${url('bagels')}/${id}`, 'DELETE', {})
    const filtered = bagels.filter(bagel => bagel.id !== id)
    setBagels(filtered)
  }

  const addBagel = (type, rating) => {
    const newBagel = {
      type: type,
      rating: rating,
    }

    boilerFetch(url('bagels'), 'POST', newBagel)
      .then(response => response.json())
      .then(result => updateNewBagel(result))
    
    newBagel.id = NaN
    setBagels([...bagels, newBagel])
  }

  function updateNewBagel(CompleteBagel) {
    const minusIncompleteBagel = bagels.filter(bagel => {
      return !isNaN(bagel.id) || bagel.type !== CompleteBagel.type
    })
    setBagels([...minusIncompleteBagel, CompleteBagel])
  }

  return [bagels, setBagels, removeBagel, addBagel]
}
