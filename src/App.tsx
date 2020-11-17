import React, { useState, useCallback } from 'react';

import NumberField from './components/NumberField/NumberField';
import './App.css';
import KeyboardRoman from './components/KeyboardRoman/KeyboardRoman';
import KeyboardArabic from './components/KeyboardArabic/KeyboardArabic';

type KeyboardType = 'roman' | 'arabic';

function App() {
  const [selectedKeyboard, setSelectedBoard] = useState<KeyboardType>('roman');

  const handleKeyPressed = useCallback(() => {

  }, []);

  return (
    <div className="App">
      <NumberField label="Arabic" value='3' />
      <NumberField label="Roman" value='iii' />
      {selectedKeyboard === 'roman' && <KeyboardRoman onKeyPressed={handleKeyPressed}/>}
      {selectedKeyboard === 'arabic' && <KeyboardArabic onKeyPressed={handleKeyPressed}/>}
    </div>
  );
}

export default App;
