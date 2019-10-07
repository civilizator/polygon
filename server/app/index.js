const Express = require( 'express' )
// const Koa = require('koa')
const MongoClient = require( 'mongodb' ).MongoClient
const bodyParser = require( 'body-parser' )
const app = Express()
// const app = new Koa()
const dbUrl = require( './db' )


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) )

const options = {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // reconnectTries: 100,
    // reconnectInterval: 500,
    // autoReconnect: true,
    // dbName: 'test'
    // , useCreateIndex: true
}

MongoClient.connect(
    dbUrl.url,
    options,
    (err, database) => {
        if (err) {
            return console.log( err )
        }

        const db = database.db( "data" )

        require( './routes' )( app, db )
    } )

module.exports = app
