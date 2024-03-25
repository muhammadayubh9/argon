import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Tables from './Pages/Tables/Tables.jsx';
import Billing from './Pages/Billing/Billing.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import "./App.scss"
import Item from './Components/Profile/SetItem/Item';

var color = {
  textColor: "#000000",
  backgroundColor: "#f7fafc",
  c: "ed8936"
}

const MyContext = React.createContext(window.localStorage.getItem("colors") || {});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login"element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/tables' element={<Tables />} />
      <Route path='/billing' element={<Billing />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);