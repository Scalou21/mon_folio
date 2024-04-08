import { Fragment } from "react";

export default function Banner() {
  return (
    <Fragment>
      <section className="mt-9 is-flex is-flex-direction-column is-align-items-center">
        <h1 className="is-size-title has-text-weight-bold is-family-secondary has-text-black">
          Jérôme Rouchy
        </h1>
        <h2 className="is-size-1 has-text-weight-light">Designer Web</h2>
      </section>
      <section className="section pt-6 pb-0">
        <div className="is-relative">
          <img
            src="../../assets/photo_home.jpg"
            alt="Jérôme Rouchy"
            width="100%"
          />
          <aside className="is-vertical">
            <h1 className="is-family-sans-serif has-text-weight-semibold is-size-folio has-text-white lh-11">
              FOLIO
            </h1>
          </aside>
        </div>
      </section>
    </Fragment>
  );
}
