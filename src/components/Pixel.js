import React from 'react'

export default props => {
  const currentColor = props.current ? 'current-color' : ''
  return (
    <div
      className={`${props.background} pixel  ${currentColor}`}
      onClick={props.onClick}
    />
  )
}
