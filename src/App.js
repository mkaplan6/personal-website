import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Resume } from './Components/Resume'
import { Misc } from './Components/Misc'
import banner from './images/banner.png';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className='Container'>
    <img style={{position:"relative", bottom: -75, width:"100%", height:"100%"}}src={banner} alt=""/>
    <Routes> {/* Every route of the website goes in between these tags */}
      <Route path='/' element={<Home />}></Route> {/* Render one specific route of the website*/}
      <Route path='resume' element={<Resume />}></Route>
      <Route path='misc' element={<Misc />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
