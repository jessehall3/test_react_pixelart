import React from 'react'
import Pixel from './Pixel';
import Colors from '../Colors'

const Controls = (props) => {
  return (
    <div>
      <div className="radio">
      <input type="radio" name="tool_type" value="0" checked={props.toolType == 0}/>
        Paint Brush<br/>
      <input type="radio" name="tool_type" value="1" checked={props.toolType == 1}/>
        Flood Fill<br/>
      </div>
      <button onClick={() => props.setUniformColor(0)}>
        Clear
      </button>
    </div>
  )
}

export default Controls
