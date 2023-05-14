/* eslint-disable react/prop-types */
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { MdReorder, MdPeople } from "react-icons/md";
function Nav({ toggle, profile }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="" onClick={toggle}>
          <MdReorder className="fs-2" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MdPeople className="fs-2" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {profile}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Setting
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
