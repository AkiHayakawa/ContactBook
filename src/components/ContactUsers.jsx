import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { usersContext } from "../usersContext"; 
import { useNavigate } from "react-router-dom";

const ContactUsers = () => {
  const { users, deleteUser } = useContext(usersContext);
  const navigate = useNavigate();
  return (
  <div className="d-flex">
    {users.map((item) => (
    <Card border="primary" style={{ width: '18rem' }}>
     <Card.Body>
     <Card.Img variant="top" src={item.img} />
       <Card.Title>{item.name}</Card.Title>
      
       <Card.Text>{item.number}</Card.Text>
       <Button variant="primary" onClick={() => deleteUser(item.id)}>Delete</Button>
       <Button variant="primary" onClick={() => navigate(`/edit/${item.id}`)}>Update</Button>
     </Card.Body>
   </Card>
 ))}</div>
      
  )
}

export default ContactUsers


