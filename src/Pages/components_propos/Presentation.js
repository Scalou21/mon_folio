import { Fragment } from "react";
import Formation from "./Formation";
import Interest from "./Interest";
import Objectives from "./Objectives";

export default function Presentation() {
  return (
    <Fragment>
      <section className="section mt-9 is-flex is-flex-direction-column">
        <div className="is-flex is-justify-content-center">
          <h1 className="has-text-black is-family-sans-serif has-text-weight-bold fs-8 w-70 has-text-centered fs-2-25-mobile">
            Vous m'aimez déjà j'ai raison ?
          </h1>
        </div>
      </section>
      <section className="section is-flex is-justify-content-space-between flex-column-mobile">
        <aside className="w-50pct is-flex width-100pct-mobile">
          <h2 className="has-text-black has-text-weight-semibold fs-6 w-25 absolute fs-2-mobile width-8-mobile">
            On se tutoie ?
          </h2>
          <div className="is-flex w-100pct is-justify-content-flex-end mright-5 margin-right-0-mobile padding-top-2-15-mobile">
            <img src="../../assets/photo_pres.jpg" alt="Jérôme Rouchy" />
          </div>
        </aside>

        <article className="is-flex w-50pct is-flex-direction-column is-justify-content-center pleft-5 width-100pct-mobile padding-left-0-mobile margin-top-4-mobile">
          <h3 className="has-text-black has-text-weight-semibold is-size-2 fs-2-mobile">
            Petite présentation :
          </h3>
          <p className="pt-6 fs-2-25 has-text-justified fs-1-5-mobile">
            Je m'appelle Jérôme Rouchy, un passionné du numérique âgé de 31 ans
            et résidant aux abords de Dijon.
          </p>
          <p className="pt-6 fs-2-25 has-text-justified fs-1-5-mobile">
            Je suis titulaire du permis B et je possède également mon propre
            véhicule.
          </p>
        </article>
      </section>
      <section className="is-flex is-flex-direction-column section">
        <div className="is-flex flex-column-mobile">
          <Formation />
          <Interest />
        </div>
        <Objectives />
      </section>
    </Fragment>
  );
}
