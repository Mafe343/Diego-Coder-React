import React from 'react';
import './Item';


const Item = ({title, price, pictureUrl}) => {
  return (
    <div className="App">
      <p>{title}</p>
      <p>{price}</p>
      <img style={{ width: '200px', height: '200px', }} src={pictureUrl} alt={title}/>
    </div>
  )
}

export default Item