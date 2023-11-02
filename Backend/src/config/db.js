const mongoose = require('mongoose');

// mongoose.connect(`mongodb://localhost:27017/stockprices`,{
//     useNewUrlParser:true,useUnifiedTopology:true
// })

// const DB = 'mongodb+srv://Deep7nshu:fqFkblzNTBWoN5SQ@cluster0.oapqoo1.mongodb.net/stocks_Data'
const DB = 'mongodb+srv://Deep7nshu:fqFkblzNTBWoN5SQ@cluster0.oapqoo1.mongodb.net/Stocks?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((err) => console.log(err));

