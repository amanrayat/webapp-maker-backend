const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const idleTimeoutSeconds = 30*60*1000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
// app.options('*', cors());

//Database Connection
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
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS");
//     next();
// });

app.get('/', (req, res) => res.send("The app is up"));
require('./services/entity.service.server')(app);
require('./services/user.service.server')(app);



//Listen to requests at port 4000
app.listen( process.env.PORT || 4000);
