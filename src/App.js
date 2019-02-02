import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [color, setColor] = useState(4) // 4 is blue
  const [uniformColor, setUniformColor] = useState(-1)

  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <button onClick={() => setUniformColor(0)}>
        Clear
      </button>
      <ColorPicker
        currentColor={color}
        setColor={setColor}
      />
      <Canvas
        currentColor={color}
        uniformColor={uniformColor}
        setUniformColor={setUniformColor}
      />
    </div>
  );
}

export default App;
