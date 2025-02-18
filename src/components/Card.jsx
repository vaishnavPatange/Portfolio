import React from 'react'

function Card({
    children,
    bg_image,
    classes
}) {
  return (
    <div className={`border rounded-md w-36 h-36 p-4 m-4 ${bg_image} ${classes}`}>
      <h2>{children}</h2>
    </div>
  )
}

export default Card
