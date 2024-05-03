import { Fragment } from "react";
import Banner from "./Banner.js";
import About from "./About.js";
import Skills from "./Skills.js";

export default function Main() {
  return (
    <Fragment>
      <main>
        <Banner />

        <About />

        <Skills/>
      </main>
    </Fragment>
  );
}
