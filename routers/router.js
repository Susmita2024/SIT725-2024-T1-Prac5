let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', async (req, res) => {
    console.log('POST: /api/cards');
    await controller.createCard(req, res);
});

router.get('/', async (req, res) => {
    console.log('GET: /api/cards');
    await controller.getAllCards(req, res);
});

module.exports = router;