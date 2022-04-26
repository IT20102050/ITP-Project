import React, { useEffect, useState, useCallback } from 'react';
import { Button,Card } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const ViewAppointment = ({appointment , handleEditClick, handleDeleteClick}) => {

  const navigate = useNavigate();

  return (
    <Card key={appointment._id}>
    <Card.Body><div className='card'></div>
     <Card.Title><div className='centered'>Appointment Receipt</div></Card.Title>
      <Card.Text>
      </Card.Text>
       <p>Date      : {appointment.date}</p>
       <p>Name      : {appointment.name}</p> 
       <p>Age       : {appointment.age}</p> 
       <p>Contact No: {appointment.tpNo}</p> 
       <p>Email     : {appointment.email}</p> 
       <p>Reason    : {appointment.reason}</p> 

    <Button type="button" className='mx-2' onClick={() => { navigate(`/update/${appointment._id}`, { state: { ...appointment } }) }}>Edit</Button>
    <Button type="button" onClick={() => handleDeleteClick(appointment._id)}>Delete</Button>
    </Card.Body>
    </Card >
  )
}

export default ViewAppointment;
