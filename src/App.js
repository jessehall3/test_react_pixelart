import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  const [color, setColor] = useState(4) // 4 is blue
  const [uniformColor, setUniformColor] = useState(-1)
  const [toolType, setToolType] = useState(0) // 0 is paint brush

  return (
    <div className="App">
      <div>
        <h1>Pixel Art</h1>
        <div className="radio">
          <input type="radio" name="tool_type" value="0" checked={toolType == 0}/>
            Paint Brush<br/>
          <input type="radio" name="tool_type" value="1" checked={toolType == 1}/>
            Flood Fill<br/>
        </div>
        <button onClick={() => setUniformColor(0)}>
          Clear
        </button>
      </div>
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
