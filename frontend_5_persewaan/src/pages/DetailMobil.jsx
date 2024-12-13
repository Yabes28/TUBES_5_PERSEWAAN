import React, { useState } from "react";
import "../assets/styles/DetailMobil.css";

const DetailMobil = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(0);

  const hitungDurasi = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDuration(diffDays);
  };

  return (
    <div className="detail-mobil-page">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="Rental Jaya Logo" height="40" />
            Rental Jaya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/DaftarMobil">
                  Daftar Mobil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/TentangKami">
                  Tentang Kami
                </a>
              </li>
            </ul>
            <div className="d-flex ms-3">
              <button id="auth-button" className="btn btn-custom me-2">
                Masuk/Daftar
              </button>
              <div id="profile-dropdown" className="dropdown d-none">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="profileMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/Profil">
                      Profil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Pesanan">
                      Pesanan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="detail-card">
              <h1 className="car-title">Toyota Corolla</h1>
              <div className="car-type">Sedan</div>
              <img
                src="/images/car7.jpg"
                alt="Toyota Corolla"
                className="img-fluid"
              />
              <p>
                Toyota Corolla adalah mobil yang terkenal dengan kenyamanan dan
                efisiensi bahan bakar. Cocok untuk perjalanan jarak jauh maupun
                penggunaan sehari-hari. Dikenal sebagai kendaraan yang handal
                dan memiliki performa yang baik.
              </p>
              <p>
                <strong>Nomor Polisi:</strong> AB 1234 CD
              </p>
              <p>
                <strong>Tahun Pembuatan:</strong> 2020
              </p>

              <div className="detail-info d-flex flex-wrap">
                <div className="feature-box">
                  <i className="fas fa-users mb-2"></i>
                  <span>5 seats</span>
                </div>
                <div className="feature-box">
                  <i className="fas fa-cogs mb-2"></i>
                  <span>Automatic</span>
                </div>
                <div className="feature-box">
                  <i className="fas fa-gas-pump mb-2"></i>
                  <span>Bensin</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="detail-card">
              <h2>IDR 350.000 / hari</h2>
              <p>
                <strong>Durasi Minimum:</strong> 1 Hari
              </p>
              <p>
                <strong>Kebijakan Pembatalan:</strong> Gratis Sebelum 24 Jam
                Penyewaan
              </p>
            </div>

            <div className="detail-card">
              <h2 className="text-xl font-bold mb-4">Detail Sewa Mobil</h2>
              <div className="form-group">
                <label htmlFor="jenis-mobil">Jenis Mobil</label>
                <input
                  className="form-control"
                  id="jenis-mobil"
                  name="jenis_mobil"
                  value="Toyota Corolla"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="tanggal-mulai">Tanggal Mulai</label>
                <input
                  className="form-control"
                  id="tanggal-mulai"
                  name="tanggal_mulai"
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    hitungDurasi();
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tanggal-selesai">Tanggal Selesai</label>
                <input
                  className="form-control"
                  id="tanggal-selesai"
                  name="tanggal_selesai"
                  type="date"
                  required
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    hitungDurasi();
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="durasi-sewa">Durasi Sewa (Hari)</label>
                <input
                  className="form-control"
                  id="durasi-sewa"
                  name="durasi_sewa"
                  type="number"
                  value={duration}
                  readOnly
                />
              </div>

              <div className="mt-4">
                <a
                  href="/Pembayaran"
                  className="btn btn-warning text-black w-100 py-3 rounded"
                >
                  Lanjut ke Pembayaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMobil;
