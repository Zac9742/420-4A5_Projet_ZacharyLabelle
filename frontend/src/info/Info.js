import React from "react";
import { Link } from "react-router-dom";
import "./Info.css"
function Info(){

    return (
        <div className="contenu-info">
            <div className="contenu-info__texte">
                <h1>Informations</h1>
                <p>
                    <Link to="/infoEmployeur">Déroulement des stages (Employeurs)</Link> <br/>
                    <Link to="/infoProfils">Profils et compétences des stagiaires</Link> <br/>
                    <Link to="/infoEtudiant">Déroulement des stages (Etudiant)</Link> <br/>
                    <Link to="/FAQ">Foire aux questions - FAQ</Link> <br/>
                </p>
            </div>
            
        </div>
    )
}

export default Info;