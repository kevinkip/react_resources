import React from 'react'
import LineItem from './LineItem';

//prop drilling. From parent to child. This is 2 levels down.
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
    {items.map((item) => (
        <LineItem 
        key={item.id}
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
    ))}
  </ul>
  )
}

export default ItemList