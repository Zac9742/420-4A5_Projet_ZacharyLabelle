import React from "react";
import { Link } from "react-router-dom";
import "./Info.css"
function InfoStageEmployeur(){

    return (
        <div className="contenu-info">
            <div className="contenu-info__texte">
                <h1>Déroulement des stages (Employeurs)</h1>
                <p>
                    Formulaire d'inscription de milieu de stage<br/>
                    Stages réguliers ayant lieu à la session hiver<br/>
                    Les stages sont du 21 janvier au 3 mai 2019<br/>
                    (il est toutefois possible après entente avec le coordonnateur de débuter le stage un peu plus tôt)<br/>
                    Sur réception de ce formulaire, le coordonnateur des stages
                    entrera en contact avec le responsable en entreprise pour discuter du stage.<br/>
                    <br/>
                    Veuillez vous référez à la page <Link to="/">Profil de sortie</Link> pour connaître le profil de sortie et les compétences des étudiants.
                </p>
            </div>
            
        </div>
    )
}

export default InfoStageEmployeur;