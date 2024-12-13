import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Register.css";
import Navbar from "../components/Navbar";
import { SignUp } from "../api/apiAuth";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    no_sim: "",
    no_telp: "",
    alamat: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (e) => {
    let isChecked = e.target.checked;
    setIsDisabled(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await SignUp(formData);
      alert("Registration successful!");
      navigate("/Login");
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage(error.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <div className="register-container bg-dark text-light">
      <Navbar />

      <div className="register-form">
        <h3 className="text-center mb-4">Daftar ke Rental Jaya</h3>
        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noSim" className="form-label">
              No SIM
            </label>
            <input
              type="text"
              className="form-control"
              id="no_sim"
              name="no_sim"
              value={formData.noSim}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noTelp" className="form-label">
              No Telepon
            </label>
            <input
              type="text"
              className="form-control"
              id="no_telp"
              name="no_telp"
              value={formData.noTelp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <input
              type="text"
              className="form-control"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>
          <label className="d-flex justify-content-start">
            <input type="checkbox" onChange={handleCheck} />
            <p className="ms-2" style={{ color: "#ffffff" }}>
              Have you already read the {" "}
              <a href="https://www.youtube.com/static?template=terms&gl=ID">
                Terms of Service
              </a>
            </p>
          </label>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-custom"
              disabled={isDisabled}
            >
              Daftar
            </button>
          </div>
          <div className="text-center mt-3">
            <span>Sudah punya akun?</span>{" "}
            <a href="/Login" className="text-warning">
              Masuk
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
