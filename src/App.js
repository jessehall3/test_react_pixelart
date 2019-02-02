import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [color, setColor] = useState(4) // 4 is blue
  const [uniformColor, setUniformColor] = useState(-1)
  const [toolType, setToolType] = useState(0) // 0 is paint brush

  return (
    <div className="App">
      <Controls
        setToolType={setToolType}
        setUniformColor={setUniformColor}
        toolType={toolType}
      />
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
