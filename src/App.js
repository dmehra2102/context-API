import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Setting from './components/Setting';
import Auth from './components/Auth';
import Error from './components/Error';
import Users from './components/Users';
import Books from './components/Books';
import Login from './components/Login';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme} id="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/setting' element={<Setting />}></Route>
        <Route path='/users' element={<Auth><Users /></Auth>}></Route>
        <Route path='/books' element={<Auth><Books /></Auth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
