const express = require('express');
const router = express.Router();
const {resolverEquacao} = require("../controller/equationController");

router.post('/equation', resolverEquacao);

module.exports = router;