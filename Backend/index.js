const server = require('./app');

const host="localhost";
const PORT_NO=8000;

server.listen(PORT_NO,host,()=>{
    console.log(`Server started at http://${host}:${PORT_NO}`)
})