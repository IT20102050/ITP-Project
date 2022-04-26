import React from 'react'
import { Container } from 'react-bootstrap'

const Receipt = ({appointment}) => {
  return (
    <div>
        <h2>Appointment Receipt</h2>
        <hr />
        <Container>
                      <p>Date      : {appointment.date}</p>
                      
                      <p>Name      : {appointment.name}</p> 
                      <p>Age       : {appointment.age}</p> 
                      <p>Contact No: {appointment.tpNO}</p> 
                      <p>Email     : {appointment.email}</p> 
                      <p>Reason    : {appointment.reason}</p> 

        </Container>

    </div>
  )
}

export default Receipt
