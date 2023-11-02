const express = require('express');
const { addStocks, getAllStocks, getStocksPrice } = require('../controller/StockController');
// const {addStocks} = require('../controller/StockController')

const stoRouter = express.Router();

stoRouter.post('/add',addStocks);
stoRouter.get('/all',getAllStocks);
stoRouter.get('/:symbol',getStocksPrice)

module.exports = stoRouter;