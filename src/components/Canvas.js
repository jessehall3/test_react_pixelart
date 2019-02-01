import React, { Component, useState } from 'react'
import Pixel from './Pixel';
import Colors from './../Colors';

const Canvas = (props) => {
  const createMatrix = (size=30, val=0) => {
    return Array(size).fill()
      .map( ()=>{
        return Array(size).fill(val)
      })
  }

  const [matrix, setMatrix] = useState(createMatrix())
  const [mouseDown, setMouseDown] = useState(false)

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
              onClick={ (e) =>  {
                console.log("MOUSE IS UP!!!!");
                setPixelColor(rowIndex, colIndex) }
              }
              onMouseDown={ (e) => {
                  setMouseDown(true)
                  console.log("MOUSE IS DOWN!!!!!");
                }
              }
              onMouseUp={ e => setMouseDown(false)}
              onMouseEnter={ (e) => {
                  if(mouseDown) {
                    setPixelColor(rowIndex, colIndex)
                    console.log("MOUSE DOWN");
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
