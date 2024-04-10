import { Fragment } from "react";
import SocialList from "./SocialList";

export default function Contact() {
  return (
    <Fragment>
      <section className="section is-flex">
        <div className="is-flex w-50pct">
        <aside className="vertical is-flex">
          <h1 className="is-size-folio is-family-secondary has-text-weight-bold lh-11 has-text-black">
            CONTACT
          </h1>
        </aside>
        <article className="is-flex is-flex-direction-column is-justify-content-center mleft-5">
          <p className="has-text-weight-semibold fs-title has-text-black">Domicile :</p>
          <p className="is-size-1">8 route d'echigey</p>
          <p className="is-size-1">21110 MARLIENS</p>
          <p className="has-text-weight-semibold fs-title has-text-black">Mail :</p>
          <p className="is-size-1">jerome.rouchy@hotmail.fr</p>
          <p className="has-text-weight-semibold fs-title has-text-black">Mobile :</p>
          <p className="is-size-1">07.81.01.84.88</p>
        </article>
        </div>

        <div className="w-50pct is-flex is-justify-content-center is-align-items-center">
          <SocialList />
        </div>
      </section>
    </Fragment>
  );
}
