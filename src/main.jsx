import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

/**
 *  
 * 
 * ============
 * BESKRIVELSE
 * ============
# Kodehodene Brancher

Tenkte vi kan bruke dette som et øvinsprosjekt for oss alle hvor vi basically får øvd litt 
på å jobbe med å bruke github i en mer real-life-setting mtp å forke/pulle ut en branch, 
requests, merge inn igjen etc...gjerne også kjøre requeste "code-review" før merge osv.

Det vi lager inni her er irrelevant tenker jeg, og trenger ikke å være noe spesifikt og 
heller ikke noe heavy shit siden formålet er mer å bare bli vandt med å jobbe med egne branches osv på github, ta code review , merge det inn i main branch osv. :)
Tenker det kan være en nyttig ting for oss å i det minste prøve og erfare. 
Dette er ikke ment å ta noe spesielt med tid bare så det er sagt :)

Det er Vite - React - Router - Sass (scss).

Instruksjon:

1. Inni Routes folder, lag deg en egen mappe med egen route og scss module fil.
2. Gå inn i NavBar jsx og legg til din Route jsx fil der.
3. Husk å importer scss filen i din route fil sånn at du kan style som du vil.
4. Lag whatever :)

 */
