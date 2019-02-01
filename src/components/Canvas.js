import React, { Component, useState } from 'react'
import Pixel from './Pixel';
import Colors from './../Colors';

const Canvas = () => {
  const createMatrix = (size=30, val=0) => {
    return Array(size).fill()
      .map( ()=>{
        return Array(size).fill(val)
      })
  }

  const [matrix, setMatrix] = useState(createMatrix())

  return (
    <div className={'canvas'}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
            />
          )
        })
      )}
    </div>
  )

}

export default Canvas
