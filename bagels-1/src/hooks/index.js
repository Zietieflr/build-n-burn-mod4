import React, { useEffect, useState } from 'react';
import { boilerGET } from '../helpers/functions'
import { url } from '../helpers/urls'

export function useBagelsAPI() {
  const [ bagels, setBagels ] = useState({})
  
  useEffect(() => {
    boilerGET(url('bagels'))
      .then(results => setBagels(results))
  }, [])

  return [bagels, setBagels]
}