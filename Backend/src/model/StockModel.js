const mongoose = require('mongoose');
const Collection = require('../config/Collection');

require('../config/db');

const StockSchema = new mongoose.Schema({
   symbol:{type:String},
   name:{type: String },
   price:{type: Number }
},{timestamps:true}
)

const StocksModel = mongoose.model(Collection.stocks,StockSchema);

// StockSchema.pre('save',function(){
//    this.price = generateStockPrice(this.price)
// })



module.exports = StocksModel;