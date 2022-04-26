import React,{useState, useEffect, Fragment} from 'react'
//import {Button,Card, Container} from 'react-bootstrap';
import axios from 'axios';
import ViewAppointment from './viewAppointment';
import EditAppointment from './EditAppointment';

const Appointments = () => {

    const [appointments,setAppointments] = useState([]);

    
  
    const deletehandler=(id)=> {
      if(window.confirm("are you sure?")){
      }
  };
  
  /*const fetchAppointments =async() => {
    const data = await axios.get('http://localhost:3000/appointment');
  
    console.log(data);
  }*/
  
   useEffect (() => {
    function getAppointments() {
        axios.get("http://localhost:8070/appointment/view").then((res) => {
        setAppointments(res.data);
        console.log(res.data)
        }).catch((err) => {
            alert(err.messege);
        })
    }
    getAppointments();
   }, []);
   const [editFormData, setEditFormData] = useState({
    date:"",
    
    name:"",
    age:"",
    tpNo:"",
    email:"",
    reason:"",
    
})


   const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
}


function updateData(e){
    e.preventDefault();
    
    const updateAppointment ={
        ID: editAppointment,
        date: editFormData.date,
        
        name: editFormData.name,
        age: editFormData.age,
        tpNo: editFormData.tpNo,
        email: editFormData.email,
        reason: editFormData.reason,

        
    }

    axios.put("http://localhost:8070/appointment/update/:ID",updateAppointment).then(() =>{
        alert("Appointment updated")
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })


}


const [editAppointment,setEditAppointment] = useState(null);

const handleEditClick = (e, appointment)=> {
    e.preventDefault();
    setEditAppointment(appointment._id)

    const formValues = {
        date: appointment.date,
        
        name: appointment.name,
        age: appointment.age,
        tpNo: appointment.tpNo,
        email: appointment.email,
        reason: appointment.reason,
    }

    setEditFormData(formValues);
}

const handleCancelClick = () => {
    setEditAppointment(null);
}


const handleDeleteClick = (id) => {
    
    axios.delete('http://localhost:8070/appointment/delete/'+id).then(() =>{
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })

}



  return (
    
        <div>
      {
                appointments.map(appointment =>(
                    <Fragment>
                    {editAppointment === appointment._id ? (
                        <EditAppointment
                            editFormData={editFormData}  
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                        />
                     ) : (
                        <ViewAppointment
                            appointment={appointment}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                        />
                     )}
                     </Fragment>

                      
                    )
                  
                )
              }
    </div>
  )
}

export default Appointments

