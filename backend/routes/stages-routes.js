const express = require("express");

const controleursStage = require("../controllers/stages-controleurs")
const router = express.Router();

router.get("/stages", controleursStage.getStages);

router.get("/:stageId", controleursStage.getStageById);

router.post('/', controleursStage.creerStage);

module.exports = router;
