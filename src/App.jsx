import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import classname from "classnames";
import Route from "./components/Route";
import Nav from "./components/nav";
import DashboardPage from "./page/DashboardPage";
import KaryawanPage from "./page/KaryawanPage";
import JabatanPage from "./page/JabatanPage";
import DivisiPage from "./page/DivisiPage";
import AbsensiPage from "./page/AbsensiPage";
import IzinPage from "./page/IzinPage";
import LemburPage from "./page/LemburPage";
import SlipGajiPage from "./page/SlipGajiPage";
import CetakGajiPage from "./page/CetakGajiPage";
import CetakLaporanPage from "./page/CetakLaporanPage";
import PenggunaPage from "./page/PenggunaPage";

function App() {
  const [toggle, setToggle] = useState(true);
  const [nameProfile] = useState("Tedy Nugroho");

  const handleToggle = (e) => {
    e.preventDefault();
    handleToggle;
    setToggle(!toggle);
  };
  const clases = classname({
    "col-7 col-md-9": toggle,
  });
  return (
    <div className="container-fluid bg-dark min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-5 col-md-3 bg-white">
            <SideBar profile={nameProfile} />
          </div>
        )}
        <div className={clases}>
          <Route path={"/"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <DashboardPage />
          </Route>
          <Route path={"/karyawan"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <KaryawanPage />
          </Route>
          <Route path={"/jabatan"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <JabatanPage />
          </Route>
          <Route path={"/divisi"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <DivisiPage />
          </Route>
          <Route path={"/absesi"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <AbsensiPage />
          </Route>
          <Route path={"/ijin"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <IzinPage />
          </Route>
          <Route path={"/lembur"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <LemburPage />
          </Route>
          <Route path={"/slipgaji"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <SlipGajiPage />
          </Route>
          <Route path={"/cetakgaji"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <CetakGajiPage />
          </Route>
          <Route path={"/cetaklaporan"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <CetakLaporanPage />
          </Route>
          <Route path={"/pengguna"}>
            <Nav toggle={handleToggle} profile={nameProfile} />
            <PenggunaPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
