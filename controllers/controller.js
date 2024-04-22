let model = require('../models/dogCards');

const createCard = (req, res) => {
    let card = req.body;
    model.addCard(card, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: "Card is Added successfully" });
        }
    });
}

const getAllCards = (req, res) => {
    model.getAllCards((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: "Card is Retrieved successfully" });

        }
    });
}

module.exports = { createCard, getAllCards }