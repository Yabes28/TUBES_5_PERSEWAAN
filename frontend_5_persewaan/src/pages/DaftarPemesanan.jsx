import React from 'react';
import '../assets/styles/DaftarPemesanan.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const DaftarPemesanan = () => {
  // Dummy data untuk pemesanan
  const bookings = [
    {
      name: "Toyota Avanza",
      license: "B 1234 XYZ",
      rent_date: "2023-10-01",
      return_date: "2023-10-05",
      status: "Selesai"
    },
    {
      name: "Honda Jazz",
      license: "B 5678 ABC",
      rent_date: "2023-10-02",
      return_date: "2023-10-06",
      status: "Selesai"
    },
    {
      name: "Suzuki Ertiga",
      license: "B 9101 DEF",
      rent_date: "2023-10-03",
      return_date: "2023-10-07",
      status: "Dalam Proses"
    }
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="content">
        <div className="container">
          <h1 className="text-center mb-4">Daftar Pemesanan</h1>
          <div className="table-responsive">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Jenis Mobil</th>
                  <th scope="col">Nomor Plat Mobil</th>
                  <th scope="col">Tanggal Sewa</th>
                  <th scope="col">Tanggal Kembali</th>
                  <th scope="col">Status</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  <>
                    <tr>
                      <th scope="row">1</th>
                      <td>{bookings[0].name}</td>
                      <td>{bookings[0].license}</td>
                      <td>{bookings[0].rent_date}</td>
                      <td>{bookings[0].return_date}</td>
                      <td>
                        <span className={`badge ${bookings[0].status === 'Selesai' ? 'bg-success' : 'bg-warning'}`}>
                          {bookings[0].status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#detailModal">
                          Detail
                        </button>
                        <button className="btn btn-warning btn-sm">Pengembalian</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>{bookings[1].name}</td>
                      <td>{bookings[1].license}</td>
                      <td>{bookings[1].rent_date}</td>
                      <td>{bookings[1].return_date}</td>
                      <td>
                        <span className={`badge ${bookings[1].status === 'Selesai' ? 'bg-success' : 'bg-warning'}`}>
                          {bookings[1].status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#detailModal">
                          Detail
                        </button>
                        <button className="btn btn-warning btn-sm">Pengembalian</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>{bookings[2].name}</td>
                      <td>{bookings[2].license}</td>
                      <td>{bookings[2].rent_date}</td>
                      <td>{bookings[2].return_date}</td>
                      <td>
                        <span className={`badge ${bookings[2].status === 'Selesai' ? 'bg-success' : 'bg-warning'}`}>
                          {bookings[2].status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#detailModal">
                          Detail
                        </button>
                        <button className="btn btn-danger btn-sm">Batalkan</button>
                      </td>
                    </ tr>
                  </>
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Tidak ada pemesanan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      <div
        className="modal fade"
        id="detailModal"
        tabIndex="-1"
        aria-labelledby="detailModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailModalLabel">
                Detail Pemesanan
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Nomor Plat: <span id="modalLicense"></span>
              </p>
              <p>
                Tanggal Sewa: <span id="modalRentDate"></span>
              </p>
              <p>
                Tanggal Kembali: <span id="modalReturnDate"></span>
              </p>
              <p>
                Status: <span id="modalStatus"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Pengembalian */}
      <div
        className="modal fade"
        id="pengembalianModal"
        tabIndex="-1"
        aria-labelledby="pengembalianModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pengembalianModalLabel">
                Konfirmasi Pengembalian
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Apakah Anda yakin ingin mengembalikan mobil <span id="pengembalianName"></span> ini?
              </p>
              <form>
                <div className="mb-3">
                  <label className="form-label">Kerusakan Mobil (pilih semua yang sesuai)</label><br />
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Tidak Ada Kerusakan" id="kerusakan0" />
                    <label className="form-check-label" htmlFor="kerusakan0">
                      Tidak Ada Kerusakan
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Cat Tergores" id="kerusakan1" />
                    <label className="form-check-label" htmlFor="kerusakan1">
                      Cat Tergores
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Kaca Pecah" id="kerusakan2" />
                    <label className="form-check-label" htmlFor="kerusakan2">
                      Kaca Pecah
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Ban Kempes" id="kerusakan3" />
                    <label className="form-check-label" htmlFor="kerusakan3">
                      Ban Kempes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Mesin Bermasalah" id="kerusakan4" />
                    <label className="form-check-label" htmlFor="kerusakan4">
                      Mesin Bermasalah
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="Kerusakan Lain" id="kerusakan5" />
                    <label className="form-check-label" htmlFor="kerusakan5">
                      Kerusakan Lain
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="keterangan" className="form-label">
                    Keterangan Kerusakan (jika ada)
                  </label>
                  <textarea className="form-control" id="keterangan" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="pengembalianTanggal" className="form-label">
                    Tanggal Pengembalian
                  </label>
                  <input type="date" className="form-control" id="pengembalianTanggal" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DaftarPemesanan;