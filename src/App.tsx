import React from 'react';

import NumberField from './components/NumberField/NumberField';
import './App.css';

function App() {
  return (
    <div className="App">
      <NumberField label="Arabic" value='3' />
      <NumberField label="Roman" value='iii' />
    </div>
  );
}

export default App;
