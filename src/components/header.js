import React from "react";
import headerStyle from "../styles/Header.module.css";
import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import { HiMiniBars3 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav className="navbar navbar-expand-lg p-0 ">
        <div className="container-fluid px-0">
          <Link className={`navbar-brand ${headerStyle.navbarBrand}`} href="/">
            <img src="/assets/images/logo.png" className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <HiMiniBars3 />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car Tyres
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bike Tyres
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tyre Pressure
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial Tyres
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Accessories
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${headerStyle.headerNavLink}`}
                  href="#"
                  id="carTyresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="carTyresDropdown"
                >
                  <li>
                    <p className={headerStyle.dropdownListHeading}>
                      Popular Car Tyre Brands
                    </p>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/summer">
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/car-tyres/winter">
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      GoodYear Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Apollo Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/car-tyres/all-season"
                    >
                      Bridgestone Tyres
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="commonBtn" type="submit">
                <span className="me-2">
                  <LuUser2 />
                </span>
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
