function generateStockPrice(){
    return (Math.random() * 1000).toFixed(2);
}

module.exports = generateStockPrice;