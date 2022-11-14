import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Resume } from './Components/Resume'
//import { Work } from './Components/Work';
import { Music } from './Components/Music'
import { Edits } from './Components/Edits'
import { Github } from './Components/Github';
import { YouTube } from './Components/YouTube';
import { LinkedIn } from './Components/Linkedin';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <Navbar />
    <div className='Container'>
    <Routes> {/* Every route of the website goes in between these tags */}
      <Route path='/' element={<Home />}></Route> {/* Render one specific route of the website*/}
      <Route path='resume' element={<Resume />}></Route>
      {/* <Route path='work' element={<Work />}></Route> */}
      <Route path='music' element={<Music />}></Route>
      <Route path='edits' element={<Edits />}></Route>
      <Route path='github' element={<Github />}></Route>
      <Route path='youtube' element={<YouTube />}></Route>
      <Route path='linkedin' element={<LinkedIn />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
