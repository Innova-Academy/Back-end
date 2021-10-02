const express = require('express');
const app = express();
const db = require('./config/db')
db();

const cors = require('cors');
app.use(cors())

app.use(express.json())
const event = require('./Routes/eventRoute');
app.use('/app',event)


app.listen(4000,()=>{
    console.log('server yekhdem')
})