import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function KaryawanPage() {
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
                  placeholder="Search Karyawan"
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
              <b>Data Karyawan</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Karyawan
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kode</th>
                  <th>Nama </th>
                  <th>Email</th>
                  <th>Alamat </th>
                  <th>Jabatan </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>K001</td>
                  <td>Tedy Nugrho</td>
                  <td>tedi.nugroho28@gmail.com</td>
                  <td>Jl yos sudarso jurumudi baru</td>
                  <td>Staff</td>
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
                    <a
                      href="#"
                      className="edit"
                      title="Edit"
                      data-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i className="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>K002</td>
                  <td>Bunya Kagawa</td>
                  <td>vicechad@hotmail.red</td>
                  <td>JJL. Margonda Raya No. 48B, Pancoran Mas</td>
                  <td>Kepala Bagian</td>
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
                    <a
                      href="#"
                      className="edit"
                      title="Edit"
                      data-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i className="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>K003</td>
                  <td>Yusuke Hoshino</td>
                  <td>phil350@gmailos.com</td>
                  <td> Jl Waru 20 A, Dki Jakarta</td>
                  <td>Kepala Bagian</td>
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
                    <a
                      href="#"
                      className="edit"
                      title="Edit"
                      data-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i className="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>K004</td>
                  <td>Rishi Miyasaka</td>
                  <td>cmirnovdmitriy@cresek.cloud</td>
                  <td> Jl Melawan 26/22, Dki Jakarta</td>
                  <td>Kepala Bagian</td>
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
                    <a
                      href="#"
                      className="edit"
                      title="Edit"
                      data-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i className="material-icons">&#xE872;</i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>K005</td>
                  <td>Kikuo Shina</td>
                  <td>yorolgooy@benefitturtle.com</td>
                  <td>Psr Kenari Loo AKS 11, Dki Jakarta</td>
                  <td>Staff</td>
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
                    <a
                      href="#"
                      className="edit"
                      title="Edit"
                      data-toggle="tooltip"
                    >
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: "red" }}
                    >
                      <i className="material-icons">&#xE872;</i>
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

export default KaryawanPage;
