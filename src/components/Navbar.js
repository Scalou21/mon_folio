import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/apropos">à propos</Link>
          </li>
          <li>
            <Link to="/">compétences</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
