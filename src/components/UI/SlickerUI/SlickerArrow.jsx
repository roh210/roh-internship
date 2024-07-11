import React from 'react'

export default function SlickerArrow(props) {
    const { className, onClick,arrowType } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      {arrowType}
    </div>
  )
}
