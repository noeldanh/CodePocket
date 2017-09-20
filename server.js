const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

// session
const session = require('express-session')
const sessionConfig = {
    secret: 'themostsecresecretkeyever',
    resave: false,
    saveUninitialized: true,
    name: 'myCookie',
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
    }
}
app.use(session(sessionConfig));

// Serve static files
app.use(express.static(path.join(__dirname, 'public', 'dist')))

// Parsers
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

// Return other routes to Angular index file..
app.get('*', function(req, res){
    res.sendFile(path.resolve('public/dist/index.html'))
})

const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP server
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}`));
