import React, { useState } from 'react'

const defaultState= {type: '', rating: ''}

export default function AddForm({ addBagel }) {
  const [ form, setForm ] = useState(defaultState)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const { type, rating } = form
    if (type && rating) { addBagel(type, rating) }
    setForm(defaultState)
  }

  const handleTyping = (event, formField) => {
    setForm({
      ...form, 
      [formField]: event.target.value
    })
  }

  return (
    <form className='add-bagel' onSubmit={handleSubmit} >
      <input placeholder='Bagel Type' value={form.type} onChange={(event) => handleTyping(event, 'type')} />
      <input placeholder='Bagel Rating' value={form.rating} onChange={(event) => handleTyping(event, 'rating')} />
      <input type='submit' value='Add Bagel' />
    </form> 
  )
}