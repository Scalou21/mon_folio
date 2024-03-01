import { Fragment } from "react";
import Formation from "./Formation";
import Interest from "./Interest";
import Objectives from "./Objectives";

export default function Presentation() {
  return (
    <Fragment>
      <section>
        <h1>Vous m'aimez déjà j'ai raison ?</h1>
        <div>
          <h2>On se tutoie ?</h2>
          <img src="../../assets/photo_pres.jpg" alt="Jérôme Rouchy" />
        </div>

        <div>
          <h3>Petite présentation :</h3>
          <p>
            Je m'appelle Jérôme Rouchy, un passionné du numérique âgé de 31 ans
            et résidant aux abords de Dijon.
          </p>
          <p>
            Je suis titulaire du permis B et je possède également mon propre
            véhicule.
          </p>
        </div>
      </section>
      <section>
        <Formation />
        <Interest />
        <Objectives />
      </section>
    </Fragment>
  );
}
