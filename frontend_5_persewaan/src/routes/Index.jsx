// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

// Importing components from src/pages/
import Beranda from '../pages/Beranda';
import DaftarMobil from '../pages/DaftarMobil';
import TentangKami from '../pages/TentangKami';
import Pembayaran from '../pages/Pembayaran';
import Profil from '../pages/Profil';
import Pesanan from '../pages/DaftarPemesanan';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminPage from '../pages/adminPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define all the routes for each page */}
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/DaftarMobil" element={<DaftarMobil />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Pembayaran" element={<Pembayaran />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Pesanan" element={<Pesanan />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/adminPage" element={<AdminPage />} />
        {/* Default route */}
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
