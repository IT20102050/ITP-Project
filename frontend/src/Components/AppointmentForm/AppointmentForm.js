import React from 'react';
import { Form,Button} from 'react-bootstrap';
//import Calendar from './calendar'
//import axios from 'axios';
import './AppointmentForm.css'

const AppointmentForm = () => {



  return (
    <div className="body">
      
    <div className="wrapper">
      
     <div className='app-wrapper'>
     <h1 className='title'> Appointment Form </h1>
       
       <Form action="http://localhost:8070/appointment/add" method="post" >

        <div className="col-md-3 element" >
                        <label for="datePicker" className="form-label">Choose a Date</label><br />
                        <input id="date" name="date" label="Choose Received Date" type="date"   InputLabelProps={{ shrink: true, }}  required
                          
                           />
                    </div>

      
        <br/>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Pet's Name</Form.Label>
        <Form.Control type="name" 
        placeholder="Pet's Name"   required
        name='name' 
        
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Pet's Age</Form.Label>
        <Form.Control type="age" placeholder="Pet's Age" name='age' required
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTpNo">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="tpNo" placeholder="contact number"  name='tpNo' required
        title='please enter exactly 10 digit '
        pattern='[0]{1}[0-9]{9}'
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReason">
        <Form.Label>Reason</Form.Label>
        <Form.Control type="reason" placeholder="reason" name="reason" required
         />
        </Form.Group>
  
        <div className='centered'>
        <Button type="submit" className="btn btn-primary Addbtn">Add Appointment</Button>

        <br />
        </div>
       
      </Form>
      </div>

    </div>  </div>


  )
}

export default AppointmentForm
