require('dotenv').config()
const express = require('express'),
    mongodb = require('mongodb'),
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

/**--------------------------------------------
 *               MONGODB
 *---------------------------------------------**/
const db_name = 'survey',
    db_collection = 'answers'

const uri = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST

const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
let collection = null
let users_collection = null


client.connect()
    .then(() => {
        // will only create collection if it doesn't exist
        return client.db(db_name).collection(db_collection)
    })
    .then(__collection => {
        // store reference to collection
        collection = __collection
            // blank query returns all documents
            // return collection.find({ }).toArray()
    })
    .then(console.log('connected to database'))

// check connection
app.use((req, res, next) => {
    if (collection !== null) {
        next()
    } else {
        res.status(503).send()
    }
})


/**--------------------------------------------
 *               EXPRESS ROUTES
 *---------------------------------------------**/
// app.use(function(req, res, next) {
//     console.log('url:', req.url)
//     if (req.session.login === true)
//         next()
//     else
//         res.sendFile(__dirname + '/public/views/login.html')
// })

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/public/views/index.html')
// })

app.get('/getAnswers', function(req, res) {
    res.writeHead(200, "OK", { 'Content-Type': 'text/plain' })
    if (collection !== null) {
        // get array and pass to res.json
        collection.find({}).toArray()
            .then(result => res.end(JSON.stringify(result)))
            .then(json => {
                return json
            })
    }
})

// app.post('/submit', function(request, response) {
//     dreams.push(request.body.newdream);
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(dreams));
// })

// app.use('/submit', function(request, response, next) {
//     console.log('submitting...')
//     let dataString = ''

//     request.on('data', function(data) {
//         dataString += data
//     })

//     request.on('end', function() {
//         console.log(json)

//         // history.push( json )
//         // debugger
//         collection.insertOne(json) //.then( result => response.json( result ) )
//             // add a 'json' field to our request object
//         request.json = JSON.stringify(json)
//         next()
//     })
// })

app.use(express.json());
app.post('/clearSurvey', async function(request, response) {
    const data = request.body;

    const survey = data.survey;
    let res = await collection.deleteMany({ 'survey': survey });
    console.log("deleted documents for survey:", survey);
    console.log(res);

    response.end();
})

app.post('/submit', async function(request, response) {
    // our request object now has a 'json' field in it from our
    // previous middleware
    // history.push( request.body.newmix)
    // console.log('response', response)
    // debugger
    // console.log('submit', request.json)
    console.log('submitting...')
    console.log('body:', request.body);
    const data = request.body;

    const survey = data.survey;
    let existingQuestionData = await collection.findOne({ 'survey': survey });
    console.log('existing data for this question:');
    console.log(existingQuestionData);
    if (existingQuestionData === null) {
        console.log('making a new document for this survey');
        let document = { survey, questions: {} };
        Object.keys(data).filter(key => key !== 'survey')
            .forEach(questionKey => {
                let response = {};
                response[data[questionKey]] = 1;
                // let questionResponses = {question: questionKey, responses: [response]}
                document.questions[questionKey] = response;
            });
        console.log(document);
        collection.insertOne(document);
    } else {
        console.log('need to update an existing document for this survey');
        let questions = existingQuestionData.questions;
        Object.keys(data).filter(key => key !== 'survey')
            .forEach(questionKey => {
                const answer = data[questionKey];
                // let questionResponses = {question: questionKey, responses: [response]}
                questions[questionKey][answer] = questions[questionKey][answer] ? questions[questionKey][answer] + 1 : 1;
            });
        console.log('new questions object:');
        console.log(questions);
        let res = await collection.updateOne({ survey }, { '$set': { 'questions': questions } });
        console.log(res);
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
        // console.log('submit response', request.json )
    response.end(JSON.stringify(request.body))
})

const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
})