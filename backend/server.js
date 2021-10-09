require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    dreams = [];

// automatically deliver all files in the public folder
// with the correct headers / MIME type.
// app.use( express.static( 'public' ) );

// get json when appropriate
app.use(express.json());

app.use(cors({
    origin: 'http://localhost'
}))

app.get('/dreams', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dreams));
})

app.post('/submit', function(request, response) {
    dreams.push(request.body.newdream);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(dreams));
})

const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
})