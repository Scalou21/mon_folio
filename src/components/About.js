import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section pt-0 vh-100 is-flex flex-column-mobile section-mobile height-auto-mobile">
      <aside className="is-flex justify-content-center-mobile">
        <h3 className="is-family-sans-serif has-text-weight-semibold has-text-grey is-size-folio vertical vh-100 lh-11 fs-3-mobile transform-none-mobile writing-mode-unset-mobile vh-0-mobile line-height-0-mobile">
          C'EST MOI
        </h3>
      </aside>

      <article className="is-flex is-flex-direction-column is-justify-content-center mleft-5 margin-left-0-mobile margin-top-4-mobile">
        <h4 className="is-family-primary fs-title has-text-weight-semibold has-text-black fs-2-mobile">
          Bonjour !
        </h4>

        <p className="is-size-1 mt-6 has-text-justified fs-1-5-mobile">
          Moi c’est Jérôme, basé à Dijon - oui oui, la moutarde tout ça - en
          France. Passionné du monde du web, du graphisme et du dessin, je suis
          designer web junior en quête d’opportunités professionnelles. Je suis
          enthousiaste à l’idée de contribuer à des projets innovants et de
          mettre en œuvre mes compétences.
        </p>

        <p className="is-size-1 mt-6 has-text-justified fs-1-5-mobile">Qu’attendez-vous pour me recruter ?</p>
        <div className="is-flex is-justify-content-flex-end justify-content-center-mobile">
          <Link to="/apropos">
            <button className="button is-black is-outlined is-medium is-radiusless has-text-weight-semibold mt-6 transition">
              + si affinités
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
}
