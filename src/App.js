import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [color, setColor] = useState(0)
  
  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <ColorPicker currentColor={color} />
      <Canvas />
    </div>
  );
}

export default App;
