const StocksModel = require('../model/StockModel');

function generateStockPrice(){
    return (Math.random() * 1000).toFixed(2);
}


exports.addStocks =  async(req,res)=>{
    try{
        const body=req.body;
        const data = {
            symbol:body.symbol,
            name:body.name,
            price:body.price,
        }
        const resData = await StocksModel.create(data);
        if(resData){
            res.json({
                status:'success',
                message:'Data Added'
            })
        }
    }
    catch(err){
        res.json({
            status:'failed',
            message:'Data not added'
        })

    }
}

exports.getAllStocks = async(req,res) =>{
    try{
        const data = await StocksModel.find();
        if(data){
            res.json({
                status:'success',
                message:'Data Found',
                data:data
            })
        }
    }
    catch(err){
        res.json({
            status:'failed',
            message:'Data not found!!'
        })
    }
}

exports.getStocksPrice = async(req,res) =>{
    try{
        const symbol = req.params.symbol;
        // console.log(symbol)
        const stock = await StocksModel.findOne({symbol});
        const randomStockPrice = generateStockPrice();
        stock.price = randomStockPrice;
        await stock.save();
        if(stock){
            return(
                res.json({
                    status:'success',
                    symbol , name:stock.name , price:randomStockPrice
                })
            )
        }

    }
    catch(err){
            res.json({
                status:'failed',
                message:'Symbol not found!!'
            })
    }
}