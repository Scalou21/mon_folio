export default function Footer() {
  return (
    <footer className="footer is-flex is-justify-content-space-around has-background-black has-text-white mt-6 flex-column-mobile">
      <div className="is-flex is-align-items-center pt-5 justify-content-center-mobile flex-column-mobile">
        <p className="is-family-secondary has-text-weight-bold fs-9 fs2-5-mobile">
          À BIENTÔT
        </p>
        <img src="../../assets/logo_footer.png" alt="my logo" className="display-none display-flex-mobile" />
      </div>

      <hr className="border-right h-15 mt-6 height-0-125-mobile"></hr>

      <div className="pt-5">
        <h3 className="is-family-secondary has-text-weight-bold fs-4 fs-2-mobile display-flex-mobile justify-content-center-mobile">ME CONTACTER</h3>
        <div className="is-flex is-justify-content-space-between justify-content-center-mobile">
          <div className="is-flex">
            <img src="../../assets/logo_footer.png" alt="my logo" className="display-none-mobile"/>
          </div>
          <div className="is-flex is-flex-direction-column is-justify-content-space-between has-text-weight-semibold is-size-5 fs-1-125-mobile line-height-5-mobile margin-top-1-mobile text-align-center-mobile">
            <p>Mail : jerome.rouchy@hotmail.fr</p>
            <p>Mobile : 07.81.01.84.88</p>
          </div>
        </div>
        <p className="is-flex is-justify-content-center pt-6 has-text-weight-semibold fs-1-125-mobile">Designé et développé par Jérôme Rouchy</p>
      </div>
    </footer>
  );
}
