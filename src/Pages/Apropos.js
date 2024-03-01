import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "./components_propos/Presentation";
import Contact from "./components_propos/Contact";

function Apropos() {
  return (
    <Fragment>
      <Header />
      <main>
        <Presentation />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Apropos;
