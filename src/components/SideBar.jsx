/* eslint-disable react/prop-types */
import Link from "./Link";
import {
  MdDashboard,
  MdPeople,
  MdPersonAdd,
  MdOutlineInventory,
  MdOutlinePerson2,
  MdMenuBook,
  MdMoney,
  MdLocalPrintshop,
} from "react-icons/md";
import "../style.css";

function SideBar({ profile }) {
  const icons = [
    MdDashboard,
    MdOutlinePerson2,
    MdPersonAdd,
    MdPersonAdd,
    MdPersonAdd,
    MdOutlineInventory,
    MdOutlineInventory,
    MdOutlineInventory,
    MdMoney,
    MdLocalPrintshop,
    MdMenuBook,
    MdOutlinePerson2,
  ];
  const linkSidebar = [
    { value: "Dashboard", path: "/" },
    { value: "Karyawan", path: "/karyawan" },
    { value: "Jabatan", path: "/jabatan" },
    { value: "Divisi", path: "/divisi" },
    { value: "Absensi", path: "/absesi" },
    { value: "Izin", path: "/ijin" },
    { value: "Lembur", path: "/lembur" },
    { value: "Slip Gaji", path: "/slipgaji" },
    { value: "Cetak Slip Gaji", path: "/cetakgaji" },
    { value: "Cetak Laporan", path: "/cetaklaporan" },
    { value: "pengguna", path: "/pengguna" },
  ];
  const renderedLinks = linkSidebar.map((link, index) => {
    const Icon = icons[index];
    return (
      <Link
        activeClassName="bg-danger"
        to={link.path}
        className="list-group-item d-flex align-items-center justify-center"
        key={index}
      >
        <Icon className="me-2 fs-4" />
        <span className="fs-5">{link.value}</span>
      </Link>
    );
  });
  return (
    <div className="bg-white sidebar p-2 pb-5">
      <div className="m-2 d-flex align-items-center">
        <MdPeople className="me-2 fs-1" />
        <span className="brand-name fs-4">{profile}</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        {renderedLinks}
        <button type="button" className="btn btn-primary mt-4">
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
