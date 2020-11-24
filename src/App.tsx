import React, { useState, useCallback } from 'react';

import NumberField from './components/NumberField/NumberField';
import './App.css';
import KeyboardRoman from './components/KeyboardRoman/KeyboardRoman';
import KeyboardArabic from './components/KeyboardArabic/KeyboardArabic';
import Switch from './components/Switch/Switch';

export type NumeralSystem = "arabic" | "roman";

function App() {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<NumeralSystem>('roman');

  const handleKeyPressed = useCallback(() => {

  }, []);

  return (
    <div className="App">
      <NumberField label="Arabic" value='3' />
      <NumberField label="Roman" value='iii' />
      <Switch numeralSystem={selectedNumeralSystem} onChange={setSelectedNumeralSystem} />
      {selectedNumeralSystem === 'roman' && <KeyboardRoman onKeyPressed={handleKeyPressed}/>}
      {selectedNumeralSystem === 'arabic' && <KeyboardArabic onKeyPressed={handleKeyPressed}/>}
    </div>
  );
}

export default App;
