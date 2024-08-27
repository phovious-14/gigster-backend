const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const conn = require("./database/conn")
const router = require('./router/Route')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require("dotenv").config()

//create a mongoDB connection
conn()

app.use(express.urlencoded({limit:'50mb', extended:true })); //set urlencoded to true
app.use(express.json()); //set json to true
app.use(cookieParser()); //set cookie parser
app.use(cors({origin: true, credentials: true})); 

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept, multipart/form-data');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/api', router)

 
app.use('/*',(req, res)=>{
    res.send("<h1>404 page not found</h1>");
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})