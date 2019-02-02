import React from 'react'
import Pixel from './Pixel';
import Colors from '../Colors'

const ColorPicker = (props) => {
  return (
    <div className="colorpicker">
      {Colors.map((color, index) => {
        return <Pixel
          key={index}
          background={color}
          current={Colors[props.currentColor] === color}
          onClick={ e => props.setColor(index) }
        />
      })}
    </div>
  )
}

const Controls = (props) => {
  return (
    <div>
      <div className="radio">
        <input type="radio" name="tool_type" value="brush"/>
          Paint Brush<br/>
        <input type="radio" name="tool_type" value="fill"/>
          Flood Fill<br/>
      </div>
      <button onClick={() => props.setUniformColor(0)}>
        Clear
      </button>
    </div>
  )
}

export default Controls
