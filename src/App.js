
import {  Route,  Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PastProjects from './components/PastProjects';
import Clients from './components/Clients';

function App() {
  return (
<>
<Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<PastProjects/>}/>
  </Routes>
  <Clients/>
  <Footer/>


</>

  );
}

export default App;
