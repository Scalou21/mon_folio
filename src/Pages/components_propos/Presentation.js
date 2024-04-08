import { Fragment } from "react";
import Formation from "./Formation";
import Interest from "./Interest";
import Objectives from "./Objectives";

export default function Presentation() {
  return (
    <Fragment>
      <section className="section mt-9 is-flex is-flex-direction-column">
        <div className="is-flex is-justify-content-center">
          <h1 className="is-family-sans-serif has-text-weight-bold fs-8 w-70 has-text-centered ">
            Vous m'aimez déjà j'ai raison ?
          </h1>
        </div>
      </section>
      <section className="section is-flex is-justify-content-space-between">
        <aside className="w-50pct">
          <h2 className="has-text-weight-semibold fs-6 is-relative">
            On se tutoie ?
          </h2>
        </aside>

        <div className="w-50pct">
          <div className="is-flex">
            <img
              src="../../assets/photo_pres.jpg"
              alt="Jérôme Rouchy"
            />
          </div>
        </div>

        <article className="w-45 fs-2-25">
          <h3>Petite présentation :</h3>
          <p>
            Je m'appelle Jérôme Rouchy, un passionné du numérique âgé de 31 ans
            et résidant aux abords de Dijon.
          </p>
          <p>
            Je suis titulaire du permis B et je possède également mon propre
            véhicule.
          </p>
        </article>
      </section>
      <section>
        <Formation />
        <Interest />
        <Objectives />
      </section>
    </Fragment>
  );
}
