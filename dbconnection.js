const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://Susmitagiri:Susmita%402024@cluster1.tlsbvrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"'
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
module.exports = { client };