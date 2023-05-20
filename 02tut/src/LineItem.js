import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input 
        type="checkbox"
        onChange={() => handleCheck(item.id)} //console.log ==> key: 2
        checked={item.checked} 
      />
      <label htmlFor=""
        onDoubleClick={() => handleCheck(item.id)}
        style={(item.checked) ? { textDecoration:'line-through'} : null}
      >
        {item.item}
      </label>
      <FaTrashAlt 
        role="button" 
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
        />
    </li>

  )
}

export default LineItem