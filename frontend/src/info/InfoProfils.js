import React from "react";
import { Link } from "react-router-dom";
import "./Info.css"
function InfoProfils(){

    return (
        <div className="contenu-info">
            <div className="contenu-info__texte">
                <h1>Profils et compétences des stagiaires.</h1>
                <p>
                    <Link to="/InfoReseau">Gestion de réseaux et sécurité</Link> <br/>
                    <Link to="/InfoProg">Développement d'applications informatiques</Link> <br/>
                </p>
            </div>
            
        </div>
    )
}

export default InfoProfils;