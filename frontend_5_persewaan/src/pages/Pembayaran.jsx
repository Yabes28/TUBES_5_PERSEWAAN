import React, { useState } from 'react';
import '../assets/styles/Pembayaran.css';

const Pembayaran = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [agree, setAgree] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const handleSubmit = () => {
    if (agree && paymentMethod) {
      alert('Pembayaran berhasil dikonfirmasi');
    } else {
      alert('Pastikan semua data sudah lengkap.');
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Beranda">
            <img src="/images/logo.png" alt="Rental Jaya Logo" height="40" />
            Rental Jaya
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Beranda">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/DaftarMobil">Daftar Mobil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/TentangKami">Tentang Kami</a>
              </li>
            </ul>
            <div className="d-flex ms-3">
              <div id="profile-dropdown" className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="profileMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileMenuLink">
                  <li><a className="dropdown-item" href="/Profil">Profile</a></li>
                  <li><a className="dropdown-item" href="/Pesanan">Pesanan</a></li>
                  <li><a className="dropdown-item" href="/Beranda">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Payment Form Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="bg-gray-800 p-2 rounded">
                <h4 className="text-center mb-4">Pembayaran</h4>
                <p><strong>Nomor Pembayaran:</strong> 1234</p>
                <p><strong>ID Penyewaan:</strong> 12</p>
                <p><strong>Total Biaya: IDR 350.000</strong></p>
                <hr />

                {/* Payment Method Options */}
                <div className="mb-3">
                  <label className="form-label">Pilih Metode Pembayaran:</label>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="metode_pembayaran" id="creditCard" value="credit_card" onChange={handlePaymentMethodChange} />
                    <label className="form-check-label" htmlFor="creditCard">
                      <i className="fas fa-credit-card payment-icons"></i> Kartu Kredit
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="metode_pembayaran" id="bankTransfer" value="bank_transfer" onChange={handlePaymentMethodChange} />
                    <label className="form-check-label" htmlFor="bankTransfer">
                      <i className="fas fa-university payment-icons"></i> Transfer Bank
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="metode_pembayaran" id="eWallet" value="e_wallet" onChange={handlePaymentMethodChange} />
                    <label className="form-check-label" htmlFor="eWallet">
                      <i className="fas fa-money-bill-wave-alt"></i> Tunai
                    </label>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="agree1" checked={agree} onChange={handleAgreeChange} required />
                    <label className="form-check-label" htmlFor="agree1">
                      Saya telah membaca syarat dan ketentuan.
                    </label>
                  </div>
                </div>

                {/* Confirm Payment Button */}
                <button className="btn btn-custom w-100 py-3" onClick={handleSubmit}>
                  Konfirmasi Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (optional) */}
      {/* <footer className="footer text-center mt-5">
        <div className="container">
          <p>© 2024 Rental Jaya. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Pembayaran;
