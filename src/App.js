import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [color, setColor] = useState(4) // 4 is blue
  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <ColorPicker
        currentColor={color}
        setColor={setColor}
      />
      <Canvas
        currentColor={color}
      />
    </div>
  );
}

export default App;
