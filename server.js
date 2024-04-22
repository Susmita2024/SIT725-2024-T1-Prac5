var express = require("express")
var app = express()
app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./dbconnection');
let router = require('./routers/router');

app.use('/api/cards', router);

app.get('/', (req, res) => {
    res.render(index.html);
});

var port = process.env.port || 3000;
app.listen(3000, () => {
    console.log('App listening on port ' + port);
}); 
