import React from "react";
import "./Info.css"
function FAQ(){

    return (
        <div className="contenu-info">
            <div className="contenu-info__texte">
                <h1>Foire aux questions - FAQ</h1>
                <p>
                    <li>Est-ce que le stage est obligatoire?<br/>
                        
                    Le stage de fin d'études en informatique est obligatoire 
                    pour l'obtention du diplôme collgégial.</li>
                    <li>Quel est l'horaire de l'étudiant durant les stages?<br/>
                        
                    L'étudiant doit respecter l'horaire de l'entreprise durant son stage. </li>
                    <li>Est-ce que l'étudiant travaille pendant les journées pédagogiques et
                    les journées de rattrapage?<br/>
                        
                    L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même
                    durant les journées pédagogiques et de rattrapage. </li>
                    <li>Quelle est la durée d'un stage de fin d'études?<br/>
                        
                    La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation). </li>
                    <li>Quelles sont les dates prévues pour les stages?<br/>
                        
                    Les stages sont prévus du 21 janvier au 3 mai 2019. </li>
                </p>
            </div>
            
        </div>
    )
}

export default FAQ;