import AddIteam from './components/AddIteam';
import Header from './components/Header';
import Allinventory from './components/Allinventory';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';


function App() {

  return (

    <Router>
    <div>
        <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/inventory" exact element ={<Allinventory/>}/>
        <Route path="/add" exact  element ={<AddIteam/>}/>
        

        
      </Routes>
  
    </div>
    </Router>
    
  );
}

export default App;

