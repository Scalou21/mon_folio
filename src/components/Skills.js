import { Fragment } from "react";
import WebList from "./WebList";
import DesignList from "./DesignList";

export default function Skills() {
  return (
    <Fragment>
      <section>
        <h2>COMPÉTENCES</h2>

        <div>
          <h3>WEB</h3>
          <WebList />
        </div>

        <div>
          <h3>DESIGN</h3>
          <DesignList />
        </div>
      </section>
    </Fragment>
  );
}
