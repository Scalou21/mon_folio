export default function Footer() {
  return (
    <footer className="footer is-flex is-justify-content-space-around has-background-black has-text-white mt-6">
      <div className="is-flex is-align-items-center pt-5">
        <p className="is-family-secondary has-text-weight-bold fs-9">
          À BIENTÔT
        </p>
      </div>

      <hr className="border-right h-15 mt-6"></hr>

      <div className="pt-5">
        <h3 className="is-family-secondary has-text-weight-bold fs-4">ME CONTACTER</h3>
        <div className="is-flex is-justify-content-space-between">
          <div className="is-flex">
            <img src="../../assets/logo_footer.png" alt="my logo" />
          </div>
          <div className="is-flex is-flex-direction-column is-justify-content-space-between has-text-weight-semibold is-size-5">
            <p>Mail : jerome.rouchy@hotmail.fr</p>
            <p>Mobile : 07.81.01.84.88</p>
          </div>
        </div>
        <p className="is-flex is-justify-content-center pt-6 has-text-weight-semibold">Designé et développé par Jérôme Rouchy</p>
      </div>
    </footer>
  );
}
