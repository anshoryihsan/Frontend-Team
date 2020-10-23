import React from 'react'
import "./styles.css"

function index(props) {
  const { iconName, isActive, iconHeight, iconWidth } = props
  return (
    <span
      className={`icon ${iconName} ${isActive ? 'active' : ''}`}
      style={{ width: iconWidth, height: iconHeight }}
    />
  )
}

export default index
