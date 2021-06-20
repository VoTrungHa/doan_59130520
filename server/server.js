
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Connect } = require("./api/config/db");
require('dotenv').config();

const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}))
 app.use('/static', express.static(path.join(__dirname, 'public'))); 
 
const PORT = process.env.PORT || 3000;
 
Connect();
const { InitRouterUser } = require('./api/routers/router'); 
InitRouterUser(app); 
app.listen(PORT, () => console.log("server running with PORT " + PORT))

