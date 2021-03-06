const bodyParser = require('body-parser');
const session    = require('express-session');
const express    = require('express');
const app        = express();
const idleTimeoutSeconds = 30*60*1000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
require ('./db/database')();

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    cookie: {
        secure : false,
        httpOnly : false,
        maxAge: idleTimeoutSeconds * 1000,
    },
    rolling: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://webapp-maker-frontend.herokuapp.com");
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/', (req, res) => res.send("The app is up"));
require('./services/entity.service.server')(app);
require('./services/user.service.server')(app);
require('./services/project.service.server')(app);
require('./services/field.service.server')(app);

app.listen( process.env.PORT || 4000);
