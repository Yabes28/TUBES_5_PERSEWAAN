import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import car1 from "../assets/images/car1.jpg"; // Import gambar mobil 1
import car2 from "../assets/images/car2.jpg"; // Import gambar mobil 2
import car3 from "../assets/images/car3.jpg"; // Import gambar mobil 3
import "../assets/styles/Beranda.css";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

const images = [
  {
    img: car1,
    title: "Mobil 1",
    description: "Deskripsi Mobil 1",
  },
  {
    img: car2,
    title: "Mobil 2",
    description: "Deskripsi Mobil 2",
  },
  {
    img: car3,
    title: "Mobil 3",
    description: "Deskripsi Mobil 3",
  },
];

// Data mobil terfavorit
const favoriteCars = [
  {
    id: 1,
    name: "Mobil Favorit 1",
    image: car1,
    description: "Deskripsi singkat tentang Mobil Favorit 1.",
  },
  {
    id: 2,
    name: "Mobil Favorit 2",
    image: car2,
    description: "Deskripsi singkat tentang Mobil Favorit 2.",
  },
  {
    id: 3,
    name: "Mobil Favorit 3",
    image: car3,
    description: "Deskripsi singkat tentang Mobil Favorit 3.",
  },
];

const Beranda = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Ambil status login dan data pengguna dari localStorage
    const status = localStorage.getItem("isLoggedIn") === "true";
    const user = JSON.parse(localStorage.getItem("userData"));
    setIsLoggedIn(status);
    setUserData(user);
  }, []);

  const handleLogout = () => {
    // Hapus data login dari localStorage dan perbarui state
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    window.location.href = "/Beranda"; // Redirect ke halaman Beranda
  };

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <Navbar />
      <ImageCarousel images={images} />

      {/* Pesan Selamat Datang */}
      {isLoggedIn ? (
        <section className="py-3 text-center">
          <h2 className="text-warning">Selamat Datang Kembali!</h2>
          <p className="text-light">
            Senang melihat Anda kembali, {userData?.email || "Pengguna"}!
          </p>
        </section>
      ) : (
        <section className="py-3 text-center">
          <h2 className="text-warning">Selamat Datang di Rental Jaya!</h2>
          <p className="text-light">Silakan login untuk menikmati layanan kami.</p>
          <Link to="/Login" className="btn btn-warning">
            Login
          </Link>
        </section>
      )}

      {/* Pelayanan Kami */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center text-warning">Pelayanan Kami</h2>
          <div className="row g-4">
            {["Sewa Mobil", "Penyewaan Jangka Panjang", "Asuransi Kendaraan"].map(
              (title, index) => (
                <div key={index} className="col-md-4">
                  <div className="card card-custom text-center p-4 bg-secondary text-light">
                    <h5 className="card-title">
                      <strong>{title}</strong>
                    </h5>
                    <p className="card-text">
                      {index === 0
                        ? "Menyediakan layanan rental mobil dengan berbagai pilihan mobil."
                        : index === 1
                        ? "Menawarkan leasing kendaraan yang memerlukan mobil dalam jangka panjang."
                        : "Memberikan perlindungan asuransi kendaraan selama masa sewa untuk keamanan pelanggan."}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Daftar Mobil Terfavorit */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center text-warning">Mobil Terfavorit</h2>
          <div className="row g-4">
            {favoriteCars.map((car) => (
              <div key={car.id} className="col-md-4">
                <div className="card card-custom text-center p-4 bg-secondary text-light">
                  <img src={car.image} alt={car.name} className="card-img-top" />
                  <h5 className="card-title">
                    <strong>{car.name}</strong>
                  </h5>
                  <p className="card-text">{car.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;
