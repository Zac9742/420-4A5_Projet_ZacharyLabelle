import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React from "react";
import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
import MainFooter from "./shared/MainFooter"
import Accueil from "./Accueil.js"
import Info from "./info/Info.js"
import Employeur from "./info/InfoStageEmployeur.js"
import Profils from "./info/InfoProfils.js"
import Reseau from "./info/InfoReseau.js"
import Prog from "./info/InfoProg.js"
import infoEtudiant from "./info/InfoStageEtudiant.js"
import FAQ from "./info/FAQ.js"
import Stages from "./stage/pages/Stages"
import Etudiants from "./etudiants/pages/Etudiants"
import Etudiant from "./etudiant/pages/Etudiant"

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/info" exact>
          <Info />
        </Route>
        <Route path="/infoEmployeur" exact>
          <Employeur />
        </Route>
        <Route path="/infoProfils" exact>
          <Profils />
        </Route>
        <Route path="/infoProg" exact>
          <Prog />
        </Route>
        <Route path="/infoReseau" exact>
          <Reseau />
        </Route>
        <Route path="/infoEtudiant" exact>
          <infoEtudiant />
        </Route>
        <Route path="/FAQ" exact>
          <FAQ />
        </Route>
        <Route path="/stages" exact>
          <Stages />
        </Route>
        <Route path="/etudiants" exact>
          <Etudiants />
        </Route>
        <Route path="/:numAdmission/etudiants" exact>
          <Etudiant />
        </Route>

        <Redirect to="/" />
      </Switch>
      </main>
      <MainFooter>
      <div>
        <h3>Coordonnées du coordonnateur de stage</h3>
        <p>Sylvain Labranche,  <a href="mailto:sylvain.labranche@cmontmorency.qc.ca">sylvain.labranche@cmontmorency.qc.ca</a></p>
        <p><small>Dernière modification : 2023-05-20</small></p>
      </div>
      </MainFooter>
    </Router>
  );
}

export default App;
