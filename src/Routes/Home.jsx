const Home = () => {
  return (
    <div>
      <div className="beskrivelse">
        <h1>Home Page</h1>
        <p>
          Tenkte vi kan bruke dette som et øvinsprosjekt for oss alle hvor vi
          basically får øvd litt på å jobbe med å bruke github i en mer
          real-life-setting mtp å forke/pulle ut en branch, requests, merge inn
          igjen etc...gjerne også kjøre requeste "code-review" før merge osv.
          <br /> <br />
          Det vi lager inni her er irrelevant tenker jeg, og trenger ikke å være
          noe spesifikt og heller ikke noe heavy shit siden formålet er mer å
          bare bli vandt med å jobbe med egne branches og derettre merge det inn
          osv på github :) <br /> <br />{" "}
          <strong>Vite - React - Router - Sass (scss)</strong>.
        </p>
        <ol>
          <li>
            Inni Routes folder, lag deg en egen mappe med egen route og scss
            module fil.
          </li>
          <li>Gå inn i NavBar jsx og legg til din Route jsx fil der.</li>
          <li>
            Husk å importer scss filen i din route fil sånn at du kan style som
            du vil.
          </li>
          <li>Lag whatever :)</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
