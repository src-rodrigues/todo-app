
const ControleTarefa = require('../../controles/ControleTarefa');

const router = require('express').Router();


router.get('/', _ => {});

router.post('/', ControleTarefa.criarTarefa);

module.exports = router;