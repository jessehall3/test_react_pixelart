import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <ColorPicker />
      <Canvas />
    </div>
  );
}

export default App;
