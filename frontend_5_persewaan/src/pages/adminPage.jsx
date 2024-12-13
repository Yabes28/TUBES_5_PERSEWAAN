import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]); // State untuk daftar mobil
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        merk: "",
        model: "",
        tahun: "",
        nomorPolisi: "",
        bahanBakar: "",
        kapasitas: "",
        harga: "",
        gambar: "",
    });

    // Proteksi halaman admin
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const role = localStorage.getItem("role");

        if (!isLoggedIn || role !== "admin") {
            navigate("/Login"); // Redirect ke login jika bukan admin
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear(); // Hapus data login
        navigate("/Login"); // Redirect ke login
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            gambar: URL.createObjectURL(e.target.files[0]),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCars([...cars, formData]);
        setFormVisible(false);
        setFormData({
            merk: "",
            model: "",
            tahun: "",
            nomorPolisi: "",
            bahanBakar: "",
            kapasitas: "",
            harga: "",
            gambar: "",
        });
    };

    return (
        <div className="bg-dark text-light vh-100">
            <div className="d-flex justify-content-between align-items-center p-3 bg-secondary">
                <h3 className="text-warning">Admin Dashboard</h3>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h4>Mobil</h4>
                    <button className="btn btn-primary" onClick={() => setFormVisible(true)}>
                        + Tambah
                    </button>
                </div>
                {formVisible && (
                    <div className="card mt-3 p-3">
                        <h5>Tambah Mobil</h5>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="merk"
                                placeholder="Merk"
                                className="form-control mb-2"
                                value={formData.merk}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="model"
                                placeholder="Model"
                                className="form-control mb-2"
                                value={formData.model}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="number"
                                name="tahun"
                                placeholder="Tahun Pembuatan"
                                className="form-control mb-2"
                                value={formData.tahun}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="nomorPolisi"
                                placeholder="Nomor Polisi"
                                className="form-control mb-2"
                                value={formData.nomorPolisi}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="bahanBakar"
                                placeholder="Bahan Bakar"
                                className="form-control mb-2"
                                value={formData.bahanBakar}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="number"
                                name="kapasitas"
                                placeholder="Kapasitas Penumpang"
                                className="form-control mb-2"
                                value={formData.kapasitas}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="number"
                                name="harga"
                                placeholder="Harga Sewa per Hari"
                                className="form-control mb-2"
                                value={formData.harga}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="file"
                                name="gambar"
                                className="form-control mb-2"
                                onChange={handleFileChange}
                                accept="image/*"
                                required
                            />
                            <button type="submit" className="btn btn-warning">
                                Tambah
                            </button>
                        </form>
                    </div>
                )}
                <div className="row mt-4">
                    {cars.map((car, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card text-dark">
                                {car.gambar && <img src={car.gambar} alt={car.merk} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {car.merk} {car.model}
                                    </h5>
                                    <p>Kapasitas: {car.kapasitas} penumpang</p>
                                    <p>Bahan Bakar: {car.bahanBakar}</p>
                                    <p>Harga: IDR {car.harga} / hari</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
