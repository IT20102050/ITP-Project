import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Appointments from './Components/AppointmentForm/Appointments';
import EditAppointment from './Components/AppointmentForm/EditAppointment';


function App() {
  return (
    <Router>
      <div className="App">
      < Header />
      
      <Routes>
      
      <Route path="/"  element={<AppointmentForm/>}/> 
      <Route path="/view" element={<Appointments/>} />
      <Route path = "/update/:id" element={<EditAppointment/>} />

    
      </Routes>
    
      
      <br />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
