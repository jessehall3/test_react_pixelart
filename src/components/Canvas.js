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

  const setPixelColor= (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix))
    newMatrix[rowIndex][colIndex] = props.currentColor
    setMatrix(newMatrix)
  }


  return (
    <div className={'canvas'}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={ e => setPixelColor(rowIndex, colIndex) }
              onMouseDown={ e => setMouseDown(true) }
              onMouseUp={ e => setMouseDown(false) }
              onMouseEnter={ e => {
                  if(mouseDown) {
                    setPixelColor(rowIndex, colIndex)
                  }
                }
              }
            />
          )
        })
      )}
    </div>
  )

}

export default Canvas
