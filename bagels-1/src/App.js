import React, { useEffect, useState } from 'react';
import { useBagelsAPI } from './hooks'
import BagelContainer from './components/BagelContainer'
import './App.css';

function App() {  
  const [ bagels, setBagels ] = useBagelsAPI()
  return (
    <div className="App">
      <h3>Come get 'em!</h3>
      <h1>Fresh Bagels!</h1>
      {bagels.length ? <BagelContainer bagels={bagels} setBagels={setBagels} /> : null}
    </div>
  );
}

export default App;
