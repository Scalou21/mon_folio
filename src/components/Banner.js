import { Fragment } from "react";

export default function Banner() {
  return (
    <Fragment>
      <section className="mt-9 is-flex is-flex-direction-column is-align-items-center">
        <h1 className="fs2-5-mobile is-size-title has-text-weight-bold is-family-secondary has-text-black fs-4-25-tablet" id="home">
          Jérôme Rouchy
        </h1>
        <h2 className=" fs-4-fullhd is-size-1 has-text-weight-light fs-2-mobile">Designer Web</h2>
      </section>
      <section className="section pt-6 pb-0 section-mobile">
        <div className="display-none-mobile">
          <img
            src="../../assets/photo_home.jpg"
            alt="Jérôme Rouchy"
            width="100%"
          />
        </div>
        <div className="display-none display-mobile">
        <img
            src="../../assets/photo_home_mobile.jpg"
            alt="Jérôme Rouchy"
            width="100%"
          />
        </div>
      </section>
    </Fragment>
  );
}
