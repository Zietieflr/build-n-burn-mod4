import React, { useEffect, useState } from 'react';
import { useBagelsAPI } from './hooks'
import BagelContainer from './components/BagelContainer'
import AddForm from './components/AddForm'
import './App.css';

function App() {  
  const [ bagels, setBagels, removeBagel, addBagel ] = useBagelsAPI()

  return (
    <div className="App">
      <h3>Come get 'em!</h3>
      <h1>Fresh Bagels!</h1>
      <AddForm addBagel={addBagel} />
      {
        bagels.length 
          ? <BagelContainer bagels={bagels} setBagels={setBagels} removeBagel={removeBagel} /> 
          : null
      }
    </div>
  );
}

export default App;
