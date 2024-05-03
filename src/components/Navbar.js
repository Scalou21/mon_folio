import { HashLink, HashLink as Link } from "react-router-hash-link";
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
        <div className="navbar-brand align-items-center-mobile">
          <Link to="/#home" className=" logo-mobile navbar-item pl-0">
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
            <span aria-hidden="true" className="width-1-5-mobile height-0-1-mobile"></span>
            <span aria-hidden="true" className="width-1-5-mobile height-0-1-mobile"></span>
            <span aria-hidden="true" className="width-1-5-mobile height-0-1-mobile"></span>
          </a>
        </div>

        {/* The navbar-menu */}
        <div className={`navbar-menu bg-black-mobile bg-black-tablet ${isActive && "is-active"}`}>
          <div className="navbar-end">
            <div className="is-flex is-flex-direction-column is-justify-content-center is-size-6 align-content-around-mobile align-content-around-tablet">
              <HashLink to="/apropos#apropos" className="is-flex is-justify-content-end justify-content-center-mobile justify-content-center-tablet">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition white-mobile fs-2-mobile white-tablet fs-3-tablet">
                  à propos
                </button>
              </HashLink>

              <HashLink to="/#myskills" className="is-flex is-justify-content-end justify-content-center-mobile justify-content-center-tablet">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition white-mobile fs-2-mobile white-tablet fs-3-tablet">
                  compétences
                </button>
              </HashLink>

              <HashLink to="/contact#contact" className="is-flex is-justify-content-end justify-content-center-mobile justify-content-center-tablet">
                <button className="navbar-item button is-family-secondary has-text-weight-semibold borderless is-black is-outlined is-radiusless transition white-mobile fs-2-mobile white-tablet fs-3-tablet">
                  contact
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
