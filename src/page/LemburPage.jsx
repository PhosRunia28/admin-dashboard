import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function LemburPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Daftar Lembur Karyawan</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Ubah Status
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Tanggal</th>
                  <th>Jam Lembur Mulai Berakhir</th>
                  <th>Keperluan Lembur</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tedy Nugroho</td>
                  <td>2023-05-10</td>
                  <td>10:35:00 | 15:35:00</td>
                  <td>235</td>
                  <td> Menunggu Konfirmasi</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Yofan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>11:05:00 | 04:05 :00</td>
                  <td>8</td>
                  <td>Disetujui</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Yofan Fiqri</td>
                  <td>2023-05-04</td>
                  <td>17:00:00 | 17:00:00</td>
                  <td>Lembur</td>
                  <td>Disetujui</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Yofan Fiqri</td>
                  <td>2023-05-03</td>
                  <td>17:00:00 | 21:00:00</td>
                  <td>Printer</td>
                  <td>Disetujui</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Yofan Fiqri</td>
                  <td>2023-04-30</td>
                  <td>01:46:00 | 04:46:00</td>
                  <td>123</td>
                  <td>Disetujui</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Yofan Fiqri</td>
                  <td>2023-04-28</td>
                  <td>17:00:46: | 20:51:00</td>
                  <td>Printer FEB</td>
                  <td>Disetujui</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>

                <button type="submit" className="btn btn-success mt-4">
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default LemburPage;
