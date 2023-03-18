import React from 'react';
import Home from './pages/home';
import User from './pages/user';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<User />} />
  </Routes>
  );
}

export default App;
