const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    numAdmission: {type: String, required: true, unique: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profil: {type: String, required: true},
    stage: {type: mongoose.Types.ObjectId, ref:"stage"}
});

module.exports = mongoose.model("Etudiant", etudiantSchema);