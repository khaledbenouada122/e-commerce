import React from 'react'
import {Button, Card } from 'react-bootstrap';

const Cardes = ({elm}) => {
  return (
    <div className='descripton'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elm.posteURL} />
      <Card.Body>
        <Card.Title >{elm.title}</Card.Title>
        <Card.Text >{elm.description}</Card.Text>
         <Card.Text>{elm.prix}</Card.Text>
       
        <Button variant="primary">Buy</Button>
      </Card.Body>
     </Card>
    </div>
  )
}

export default Cardes
