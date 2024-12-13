import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/DaftarMobil.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const DaftarMobil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(status);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/DaftarMobil";
  };

  // Data mobil
  const cars = [
    {
      id: 1,
      name: "Contoh Mobil 1",
      passengers: 5,
      transmission: "Manual",
      price: "Rp 300.000.000",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 2,
      name: "Contoh Mobil 2",
      passengers: 4,
      transmission: "Otomatis",
      price: "Rp 400.000.000",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 3,
      name: "Contoh Mobil 3",
      passengers: 5,
      transmission: "Manual",
      price: "Rp 350.000.000",
      image: "https://via.placeholder.com/250",
    },
    {
      id: 4,
      name: "Contoh Mobil 3",
      passengers: 5,
      transmission: "Manual",
      price: "Rp 350.000.000",
      image: "https://via.placeholder.com/250",
    },
  ];

  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <main className="container mt-5">
        <form action="/DaftarMobil" method="GET" className="mb-4" style={{ marginTop: '30px' }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari mobil..."
              name="search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Cari
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center flex-wrap mb-4">
          <button className="btn btn-warning me-2">Semua</button>
          <button className="btn btn-secondary me-2">MPV</button>
          <button className="btn btn-secondary me-2">SUV</button>
          <button className="btn btn-secondary me-2">Sport</button>
          <button className="btn btn-secondary me-2">Hatchback</button>
          <button className="btn btn-secondary me-2">Convertible</button>
          <button className="btn btn-secondary">Off-Road</button>
        </div>

        {/* Cars List */}
        <div className="row">
          {cars.map((car) => (
            <div className="col-md-4 mb-4" key={car.id}>
              <div className="card bg-dark text-light">
                <img
                  src={car.image}
                  alt={car.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4>
                    <b>{car.name}</b>
                  </h4>
                  <p className="card-text">
                    <i className="fas fa-users text-warning"></i> {car.passengers}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-cogs text-warning"></i> {car.transmission}
                  </p>
                  <p className="fw-bold">{car.price}</p>
                  <button className="btn btn-custom">
                    <Link
                      to={`/DetailMobil/${car.id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Lihat Detail
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DaftarMobil;