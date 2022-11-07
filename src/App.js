import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Resume } from './Components/Resume'
import { Band } from './Components/Band'
import { Edits } from './Components/Edits'
import { Github } from './Components/Github';
import { YouTube } from './Components/YouTube';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className='Container'>
    <Routes> {/* Every route of the website goes in between these tags */}
      <Route path='/' element={<Home />}></Route> {/* Render one specific route of the website*/}
      <Route path='resume' element={<Resume />}></Route>
      <Route path='band' element={<Band />}></Route>
      <Route path='edits' element={<Edits />}></Route>
      <Route path='github' element={<Github />}></Route>
      <Route path='youtube' element={<YouTube />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
