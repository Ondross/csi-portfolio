import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';

function App() {
  return (
    <div className="content" >
      <div className='nav'>
        <div className='left-column'>
          <div className='author-name'> Laith Weinberger </div>
        </div>
        <div className='right-column'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/planning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Planning</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Personas</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Insight Statements</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link nav-link active' : 'reflection-link nav-link' }>⭐ Reflection </NavLink>
        </div>
      </div>
      <Routes>
        <Route exact path='/insights' element={<Insight text="First Insight" />}></Route>
        <Route exact path='/personas' element={<div>Personas</div>}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
