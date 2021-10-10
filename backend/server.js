require('dotenv').config()
const express = require('express'),
    mongodb = require( 'mongodb' ),
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

const uri = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_HOST

const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true })
let collection = null
let users_collection = null


client.connect()
.then( () => {
// will only create collection if it doesn't exist
return client.db( db_name ).collection( db_collection)
})
.then( __collection => {
// store reference to collection
collection = __collection
// blank query returns all documents
// return collection.find({ }).toArray()
})
.then( console.log('connected to database') )

// check connection
app.use( (req,res,next) => {
if( collection !== null ) {
next()
}else{
res.status( 503 ).send()
}
})


/**--------------------------------------------
 *               EXPRESS ROUTES
 *---------------------------------------------**/
app.get('/dreams', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dreams));
})

app.use( function( req, res, next ) {
    console.log( 'url:', req.url )
    if( req.session.login === true )
      next()
    else
      res.sendFile( __dirname + '/public/views/login.html' )
  })
  
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/public/views/index.html' )
})

app.get( '/getAnswers', function (req, res) {
    res.writeHead( 200, "OK", {'Content-Type': 'text/plain' })
    if( collection !== null ) {
      // get array and pass to res.json
      collection.find({ }).toArray()
      .then(result => res.end( JSON.stringify(result)))
      .then( json => {
        return json
      })
    }
})

// app.post('/submit', function(request, response) {
//     dreams.push(request.body.newdream);
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(dreams));
// })

app.use('/submit',  function( request, response, next ) {
    console.log('submitting...')
    let dataString = ''
  
    request.on( 'data', function( data ) {
      dataString += data 
    })
  
    request.on( 'end', function() {
      console.log(json)
  
      // history.push( json )
      // debugger
      collection.insertOne( json )//.then( result => response.json( result ) )
      // add a 'json' field to our request object
      request.json = JSON.stringify( json )
      next()
    })
  })
  
  
app.post( '/submit', function( request, response ) {
    // our request object now has a 'json' field in it from our
    // previous middleware
    // history.push( request.body.newmix)
    // console.log('response', response)
    // debugger
    // console.log('submit', request.json)
    response.writeHead( 200, { 'Content-Type': 'application/json'})
    // console.log('submit response', request.json )
    response.end( JSON.stringify(request.json ))
})

const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
})