import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { getUserProfile, updateUserProfile } from "../api/apiAuth";
import "../assets/styles/Profil.css";

const Profil = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    no_sim: "",
    no_telp: "",
    alamat: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile data from API
    getUserProfile()
      .then((res) => {
        setProfileData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Gagal mengambil data profil");
        setLoading(false);
      });
  }, []);

  const handleEditProfile = (e) => {
    e.preventDefault();
    updateUserProfile(profileData)
      .then(() => {
        toast.success("Profil berhasil diperbarui");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Gagal memperbarui profil");
      });
  };

  if (loading) {
    return <div className="text-center text-light">Memuat data...</div>;
  }

  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar />
      <div className="container mt-5 pt-5 profile-container">
        {/* Profile Section */}
        <div className="profile-section">
          <h4 className="section-title">Informasi Pengguna</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="form-control"
                id="nama"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
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
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="kata-sandi" className="form-label">
                Kata Sandi
              </label>
              <input
                type="password"
                className="form-control"
                id="kata-sandi"
                value={profileData.password}
                onChange={(e) =>
                  setProfileData({ ...profileData, password: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="no-sim" className="form-label">
                No SIM
              </label>
              <input
                type="text"
                className="form-control"
                id="no-sim"
                value={profileData.no_sim}
                onChange={(e) =>
                  setProfileData({ ...profileData, no_sim: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="no-telp" className="form-label">
                No Telepon
              </label>
              <input
                type="text"
                className="form-control"
                id="no-telp"
                value={profileData.no_telp}
                onChange={(e) =>
                  setProfileData({ ...profileData, no_telp: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">
                Alamat
              </label>
              <textarea
                className="form-control"
                id="alamat"
                rows="2"
                value={profileData.alamat}
                onChange={(e) =>
                  setProfileData({ ...profileData, alamat: e.target.value })
                }
              />
            </div>
          </form>
        </div>

        {/* Edit Profile Button */}
        <div className="text-center mt-4">
          <button className="btn btn-warning" onClick={handleEditProfile}>
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
