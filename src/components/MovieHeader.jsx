import React from 'react'
import './MovieHeader.css'
function header(props) {
  return (
    <div className="col">
        <h1>{props.heading}</h1>
    </div>
  )
}

export default header