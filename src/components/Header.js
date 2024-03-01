import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
      <img src="../../assets/logo.png" alt="my logo" />
      </Link>

      <Navbar />
    </header>
  );
}
