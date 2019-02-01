import React from 'react'

export default props => {
  const currentColor = props.current ? 'current-color' : ''
  return (
    <div
      className={`${props.background} pixel  ${currentColor}`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
    />
  )
}
