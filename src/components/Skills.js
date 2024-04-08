import { Fragment } from "react";
import WebList from "./WebList";
import DesignList from "./DesignList";

export default function Skills() {
  return (
    <Fragment>
      <section className="section is-flex is-flex-direction-column vh-100">
        <h2 className="is-flex is-justify-content-center is-size-folio has-text-black is-family-sans-serif has-text-weight-semibold">COMPÉTENCES</h2>

        <div className="is-flex is-align-items-center pt-10">
          <h3 className="vertical is-family-secondary fs-10 has-text-weight-bold has-text-grey">WEB</h3>
          <WebList />
        </div>
        </section>
<section className="section is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-row-reverse is-align-items-center">
          <h3 className="vertical-inverse is-family-secondary fs-10 has-text-weight-bold has-text-grey">DESIGN</h3>
          <DesignList />
        </div>
      </section>
    </Fragment>
  );
}
