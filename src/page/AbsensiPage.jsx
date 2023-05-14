import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function DivisiPage() {
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
              <b>Data Hadir Karyawan</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred"></div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Karyawan</th>
                  <th>Tanggal</th>
                  <th>Lokasi Absen</th>
                  <th>Jam Masuk</th>
                  <th>Jam Keluar</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ahmad Febry</td>
                  <td>2023-05-10</td>
                  <td>Kampus Kimia</td>
                  <td>16:21:24</td>
                  <td>18:09:22</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Yoyan Fiqri</td>
                  <td>2023-05-10</td>
                  <td>Unpam Viktor</td>
                  <td>10:35:02</td>
                  <td>10:35:02</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: "#10ab80" }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                  </td>
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

export default DivisiPage;
