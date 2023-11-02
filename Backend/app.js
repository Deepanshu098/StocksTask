const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
app.use(cors());

const stocksRouter = require('./src/routes/StockRouter')


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended :true}))


app.use('/stocks',stocksRouter)

module.exports = app;