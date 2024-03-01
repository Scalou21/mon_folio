import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "./components_propos/Presentation";

function Apropos() {
  return (
    <Fragment>
      <Header />
      <Presentation />
      <Footer />
    </Fragment>
  );
}

export default Apropos;
