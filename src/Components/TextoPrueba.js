import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';


function TextoPrueba(props) {
  return (
    <div>
      <h2 className="App m-4">{props.texto}</h2>
    </div>
  )
}
export default TextoPrueba
