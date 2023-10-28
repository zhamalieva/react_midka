import './App.css';
import AppHeader from './components/header/';
import { Navbar } from './components/navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

export const App = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <div className="App">
          <AppHeader />
          <Navbar />

          
          </div>
  );
}

export default App;