import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Resume } from './Components/Resume'
import { Misc } from './Components/Misc'

function App() {
  return (
    <Routes> {/* Every route of the website goes in between these tags */}
      <Route path='/' element={<Home />}></Route> {/* Render one specific route of the website*/}
      <Route path='resume' element={<Resume />}></Route>
      <Route path='misc' element={<Misc />}></Route>
    </Routes>
  );
}

export default App;
