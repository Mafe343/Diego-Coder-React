import React from 'react';
import './ItemList';
import Item from './Item'

const ItemList = ({items}) => {
  return(
    <div className="container">
      {items.map(item=>(
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ItemList