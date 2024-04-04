import './App.css';
import Bejegyzesek from "./Components/Bejegyzesek"
import UjBejegyzes from './Components/UjBejegyzes';
import ModositBejegyzes from './Components/ModositBejegyzes';
import TorolBejegyzes from './Components/TorolBejegyzes';
import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


function App() {
  return(
  <Router>
     <ToastContainer />
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
           <NavLink to={`/`} className="nav-link">
              <span className="nav-link">Bejegyzések</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/UjBejegyzes`} className="nav-link">
              <span className="nav-link">Új bejegyzés</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    <Routes>
      <Route path='/' element={<Bejegyzesek/>}/>
      <Route path='/UjBejegyzes' element={<UjBejegyzes/>}/>
      <Route path='/ModositBejegyzes/:id' element={<ModositBejegyzes/>}/>
      <Route path='/TorolBejegyzes/:id' element={<TorolBejegyzes/>}/>
    </Routes>
  </Router>
  )
}

export default App;
