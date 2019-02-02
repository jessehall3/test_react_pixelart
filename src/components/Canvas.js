import React, { useState, useEffect } from 'react';
import Pixel from './Pixel';
import Colors from './../Colors';

const Canvas = (props) => {
  const defaultSize = 30

  const createMatrix = (val=0) => {
    return Array(defaultSize).fill()
      .map( ()=>{
        return Array(defaultSize).fill(val)
      })
  }

  const [matrix, setMatrix] = useState(createMatrix())
  const [mouseDown, setMouseDown] = useState(false)

  useEffect( () => {
    if(props.uniformColor > -1){
      const newMatrix = createMatrix(props.uniformColor)
      setMatrix(newMatrix)
      props.setUniformColor(-1)
    }
  })

  const runTool = (rowIndex, colIndex) => {
    const tool2action = {
      "0" : function() {
        setPixelColor(rowIndex, colIndex)
      },
      "1" : function() {
        floodFill(rowIndex, colIndex)
      },
    }
    tool2action[props.toolType]()
  }

  const floodFill = (rowIndex, colIndex) => {
    console.log('foo');
  }

  const setPixelColor= (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix))
    newMatrix[rowIndex][colIndex] = props.currentColor
    setMatrix(newMatrix)
  }

  const dragBrush = (rowIndex, colIndex) => {
    if(mouseDown) {
      runTool(rowIndex, colIndex)
    }
  }


  return (
    <div className={'canvas'}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={ () => runTool(rowIndex, colIndex) }
              onMouseDown={ () => setMouseDown(true) }
              onMouseUp={ () => setMouseDown(false) }
              onMouseEnter={ () => dragBrush(rowIndex, colIndex) }
            />
          )
        })
      )}
    </div>
  )

}

export default Canvas
