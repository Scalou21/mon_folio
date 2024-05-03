import { HashLink } from "react-router-hash-link";



export default function About() {
  return (
    <section className="section pt-0 vh-100 is-flex flex-column-mobile section-mobile height-auto-mobile flex-column-tablet height-auto-tablet margin-top-4-mobile">
      <aside className="is-flex justify-content-center-mobile justify-content-center-tablet">
        <h3 className="is-family-sans-serif has-text-weight-semibold has-text-grey is-size-folio vertical vh-100 lh-9 fs-3-mobile transform-none-mobile
         writing-mode-unset-mobile vh-0-mobile line-height-0-mobile transform-none-tablet writing-mode-unset-tablet vh-0-tablet line-height-0-tablet fs-5-tablet margin-top-5-tablet">
          C'EST MOI
        </h3>
      </aside>

      <article className="is-flex is-flex-direction-column is-justify-content-center mleft-5 margin-left-0-mobile margin-top-4-mobile margin-left-0-tablet margin-top-9-tablet margin-left-0-tablet">
        <h4 className="is-family-primary fs-title has-text-weight-semibold has-text-black fs-2-mobile fs-3-tablet">
          Bonjour !
        </h4>

        <p className="is-size-1 mt-6 has-text-justified fs-1-5-mobile fs-2-tablet">
          Moi c’est Jérôme, basé à Dijon - oui oui, la moutarde tout ça - en
          France. Passionné du monde du web, du graphisme et du dessin, je suis
          designer web junior en quête d’opportunités professionnelles. Je suis
          enthousiaste à l’idée de contribuer à des projets innovants et de
          mettre en œuvre mes compétences.
        </p>

        <p className="is-size-1 mt-6 has-text-justified fs-1-5-mobile fs-2-tablet">
          Qu’attendez-vous pour me recruter ?
        </p>
        <div className="is-flex is-justify-content-flex-end justify-content-center-mobile justify-content-center-tablet">
          <HashLink to="/apropos#apropos">
            <button className="button is-black is-outlined is-medium is-radiusless has-text-weight-semibold mt-6 transition">
              + si affinités
            </button>
          </HashLink>
        </div>
      </article>
    </section>
  );
}
