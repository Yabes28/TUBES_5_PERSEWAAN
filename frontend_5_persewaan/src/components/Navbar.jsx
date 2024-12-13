    import React, { useEffect, useState } from "react";
    import { NavLink } from "react-router-dom";
    import logo from "../assets/images/logo.png";
    import { List, LogOut, User2 } from "lucide-react";
    import "../assets/styles/Navbar.css";

    const Navbar = () => {
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

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
            {/* Logo */}
            <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Rental Jaya Logo" height="40" />
            Rental Jaya
            </NavLink>
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

            {/* Navbar Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <NavLink className="nav-link" to="/Beranda">
                    Beranda
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/DaftarMobil">
                    Daftar Mobil
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/TentangKami">
                    Tentang Kami
                </NavLink>
                </li>
            </ul>

            {/* Conditional Buttons */}
            <div className="d-flex ms-3">
                {!isLoggedIn ? (
                <a href="/Login" className="btn btn-custom me-2">
                    Masuk/Daftar
                </a>
                ) : (
                    <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="profileMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-user"></i> {userData?.name || "Pengguna"}
                    </button>
                    <ul
                        className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
                        aria-labelledby="profileMenuLink"
                    >
                        <li>
                        <NavLink className="dropdown-item" to="/Profil">
                            <User2 size={20} className="me-2" />
                            Profil
                        </NavLink>
                        </li>
                        <li>
                        <NavLink className="dropdown-item" to="/Pesanan">
                            <List size={20} className="me-2" />
                            Pesanan
                        </NavLink>
                        </li>
                        <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                            <LogOut size={20} className="me-2" />
                            Logout
                        </button>
                        </li>
                    </ul>
                    </div>
                
                )}
            </div>
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;
