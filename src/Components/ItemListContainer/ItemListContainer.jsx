import React from 'react'
import './ItemListContainer.css'
const ItemListGretting = ({greeting}) => {
  return (
    <div className='greeting'>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListGretting