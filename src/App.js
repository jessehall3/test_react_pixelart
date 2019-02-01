import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [color, setColor] = useState(0)
  const setPaintColor = (e) => {
    setColor(2)
  }
  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <ColorPicker
        currentColor={color}
        onClick={setPaintColor}
      />
      <Canvas />
    </div>
  );
}

export default App;
