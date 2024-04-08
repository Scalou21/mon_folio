import { Link } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <Fragment>
      <nav
        className="navbar is-fixed-top section py-0"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item pl-0">
            <img
              src="../../assets/logo.png"
              alt="my logo"
              width="61"
              height="67"
            />
          </Link>
          {/* The navbar-burger */}
          <a
            role="button"
            className={`navbar-burger ${isActive && "is-active"}`}
            onClick={() => {
              setisActive(!isActive);
            }}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* The navbar-menu */}
        <div className={`navbar-menu ${isActive && "is-active"}`}>
          <div className="navbar-end">
            <div className="is-flex is-flex-direction-column is-justify-content-center is-size-6">
              <Link to="/apropos" className="is-flex is-justify-content-end">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition">
                  à propos
                </button>
              </Link>

              <Link to="/" className="is-flex is-justify-content-end">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition">
                  compétences
                </button>
              </Link>

              <Link to="/contact" className="is-flex is-justify-content-end">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition">
                  contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
