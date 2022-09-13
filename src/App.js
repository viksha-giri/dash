import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';


function App() {
  return (
    <>
   <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            
          </Routes>
        </Router>
    </>
  );
}

export default App;
