import { Fragment } from "react";
import WebList from "./WebList";
import DesignList from "./DesignList";

export default function Skills() {
  return (
    <Fragment>
      <section className="section is-flex is-flex-direction-column vh-100 height-auto-mobile height-auto-tablet">
        <h2 className="is-flex is-justify-content-center is-size-folio has-text-black is-family-sans-serif has-text-weight-semibold">
          COMPÉTENCES
        </h2>

        <div className="is-flex is-align-items-center pt-10 flex-column-mobile padding-top-5-mobile flex-column-tablet padding-top-5-tablet">
          <h3 className="vertical is-family-secondary fs-10 has-text-weight-bold has-text-grey transform-none-mobile writing-mode-unset-mobile fs-2-25-mobile transform-none-tablet writing-mode-unset-tablet fs-3-25-tablet">
            WEB
          </h3>
          <WebList />
        </div>
      </section>
      <section className="section is-flex is-flex-direction-column flex-column-tablet padding-top-5-tablet">
        <div className="is-flex is-flex-direction-row-reverse is-align-items-center flex-column-mobile flex-column-tablet padding-top-5-tablet">
          <h3 className="vertical-inverse is-family-secondary fs-10 has-text-weight-bold has-text-grey transform-none-mobile writing-mode-unset-mobile fs-2-25-mobile transform-none-tablet writing-mode-unset-tablet fs-3-25-tablet">
            DESIGN
          </h3>
          <DesignList />
        </div>
      </section>
    </Fragment>
  );
}
