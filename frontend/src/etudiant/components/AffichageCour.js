import React from "react";
import donnees from "../../data/donnees";
import "./NouvelEtudiant.css"
function AffichageCour({element}) {
  let prof = "";
  for(let i = 0; i < donnees.professeurs.length; i++){
    if(donnees.professeurs[i].cours.includes(element.titre)){
      prof = donnees.professeurs[i].prenom + " " + donnees.professeurs[i].nom
    }
  }
    return (
          <div className="formulaire">
            <h1>{element.titre}</h1>
            <p>Cours donné par {prof}</p>
          </div>
    );
  }
  
  export default AffichageCour;
  

