import React,{useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom"
import "./AppointmentForm.css"

const EditAppointment = ({ handleEditFormChange, handleCancelClick}) => {

  const [date, setDate] = useState ("");
  const [name, setName] = useState ("");
  const [age, setAge] = useState ("");
  const [tpNo, settpNo] = useState ("");
  const [email, setemail] = useState ("");
  const [reason, setReason] = useState ("");



  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setDate(state.date)
    setName(state.name)
    setAge(state.age)
    settpNo(state.tpNo)
    setemail(state.email)
    setReason(state.reason)

  }, [state])

  const onSubmit = (e) => {
    
    e.preventDefault();
    const ID = state._id;
    const appointment = { ID,date,name,age,tpNo,email,reason }

    axios.put('http://localhost:8070/appointment/update/:ID', appointment)
      .then((res) => {
        navigate("/view");
      });

  }

  return (

    <div className='body' >
      <div className="wrapper">
      <div className="app-wrapper">
        <Form onSubmit={onSubmit}>

        <div className="col-md-3 element" style={{ display: 'block'}}>
                        <label for="datePicker" className="form-label">Choose a Date</label><br />
                        <input id="date" name="date" label="Choose Received Date" type="date" InputLabelProps={{ shrink: true, }}  required
                        value={date}
                        onChange={({ target: { value } }) => {setDate(value); }}  
                         />
        </div>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Pet's Name</Form.Label>
        <Form.Control type="name" placeholder="Pet's Name"  name='name'  value={name} required
                        onChange={({ target: { value } }) => {setName(value); }}  
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Pet's Age</Form.Label>
        <Form.Control type="age" placeholder="Pet's Age" name='age'  value={age}
                        onChange={({ target: { value } }) => {setAge(value); }}  
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTpNo">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="tpNo" placeholder="contact number"  name='tpNo'   value={tpNo}
        title='please enter exactly 10 digit '
        pattern='[0]{1}[0-9]{9}'
                        onChange={({ target: { value } }) => {settpNo(value); }}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  value={email}
                        onChange={({ target: { value } }) => {setemail(value); }}  
         />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReason">
        <Form.Label>Reason</Form.Label>
        <Form.Control type="reason" placeholder="reason" name="reason"  value={reason}
                        onChange={({ target: { value } }) => {setReason(value); }}  
         />
        </Form.Group>
  
        <Button type="submit" className='mx-2 '>Save</Button>
        <Button type="button" href='/view' onClick={handleCancelClick}>Cancel</Button>

        </Form>

    </div>
    </div>
    </div>
  )
}

export default EditAppointment;