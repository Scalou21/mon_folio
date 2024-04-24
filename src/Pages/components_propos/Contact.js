import { Fragment } from "react";
import SocialList from "./SocialList";

export default function Contact() {
  return (
    <Fragment>
      <section className="section is-flex flex-column-mobile">
        <div className="is-flex w-50pct flex-column-mobile width-100pct-mobile">
        <aside className="vertical is-flex transform-none-mobile writing-mode-unset-mobile justify-content-center-mobile">
          <h1 className="is-size-folio is-family-secondary has-text-weight-bold lh-11 has-text-black ">
            CONTACT
          </h1>
        </aside>
        <article className="is-flex is-flex-direction-column is-justify-content-center mleft-5 margin-left-0-mobile align-items-center-mobile">
          <p className="has-text-weight-semibold fs-title has-text-black fs-2-mobile">Domicile :</p>
          <p className="is-size-1 fs-1-5-mobile">8 route d'echigey</p>
          <p className="is-size-1 fs-1-5-mobile">21110 MARLIENS</p>
          <p className="has-text-weight-semibold fs-title has-text-black fs-2-mobile margin-top-1-mobile">Mail :</p>
          <p className="is-size-1 fs-1-5-mobile">jerome.rouchy@hotmail.fr</p>
          <p className="has-text-weight-semibold fs-title has-text-black fs-2-mobile margin-top-1-mobile">Mobile :</p>
          <p className="is-size-1 fs-1-5-mobile">07.81.01.84.88</p>
        </article>
        </div>

        <div className="w-50pct is-flex is-justify-content-center is-align-items-center width-100pct-mobile justify-content-around-mobile margin-top-1-mobile">
          <SocialList />
        </div>
      </section>
    </Fragment>
  );
}
