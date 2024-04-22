const { client } = require('../dbconnection');

const getAllCards = (callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('MongoDB connection connected')
            }
            const collection = client.db("card").collection('card');
            collection.find({}).toArray(callback);
        });
    } catch (error) {
      console.error('Error fetching cards from database!');
      console.error(error);
    }
}

const addCard = (card, callback) => {
    try {
        client.connect((err) => {
            if (!err) {
                console.log('MongoDB connected successfully')
            }
            const collection = client.db("card").collection('card');
           
           
            collection.insertOne(card.value, callback);
        });
    }  catch (error) {
      console.error('Error adding card to database!');
      console.error(error);
    }
}

module.exports = { addCard, getAllCards }