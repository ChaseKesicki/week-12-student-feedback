const express = require('express')  //pulls up express library
const path = require('path')  //connects pieces of data between directories
const bodyParser = require('body-parser')  //lets you read and convert data for POST requests

const indexRouter = require('./routes/index.js')  //brings in content of index

const app = express() // creates the web app server


// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false}))


const staticfileLocation = path.join(__dirname, 'public') //lets us use our static files
app.use(express.static(staticfileLocation))

// tell app where the views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')  // use handlebars to generate views

app.use('/', indexRouter)  // all requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})