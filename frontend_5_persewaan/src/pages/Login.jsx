import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/styles/Login.css";
import { SignIn } from "../api/apiAuth"; // Import fungsi SignIn dari API

const Login = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    }); // State untuk menyimpan input pengguna
    const [loading, setLoading] = useState(false); // State untuk loading spinner
    const [error, setError] = useState(null); // State untuk pesan error
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Tampilkan loading saat proses login

        try {
            const response = await SignIn(data); // Panggil fungsi SignIn dari API
            sessionStorage.setItem("token", response.access_token); // Simpan token ke sessionStorage
            sessionStorage.setItem("user", JSON.stringify(response.user)); // Simpan data pengguna ke sessionStorage

            alert(`Selamat datang, ${response.user.name}!`); // Tampilkan pesan selamat datang

            if (response.user.role === "admin") {
                navigate("/adminPage"); // Arahkan ke halaman admin jika role adalah admin
            } else {
                navigate("/beranda"); // Arahkan ke halaman beranda jika bukan admin
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError(err.message || "Terjadi kesalahan. Silakan coba lagi nanti.");
        } finally {
            setLoading(false); // Sembunyikan loading setelah proses selesai
        }
    };

    return (
        <div className="bg-dark text-light">
            <Navbar />
            <div className="login-container">
                <div className="login-form">
                    <h3 className="text-center mb-4">Masuk ke Rental Jaya</h3>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
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
                                value={data.name}
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
                                value={data.email}
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
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-warning"
                                style={{ backgroundColor: "#ffc107", borderColor: "#ffc107" }}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Masuk"}
                            </button>
                        </div>
                        <div className="text-center mt-3">
                            <a href="#" className="text-warning">
                                Lupa password?
                            </a>
                        </div>
                        <div className="text-center mt-3">
                            <span>Belum punya akun?</span>
                            <a href="/register" className="text-warning">
                                Daftar
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
