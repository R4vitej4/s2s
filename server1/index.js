const express = require('express');
const order = require('./routes/order')
const app= express();
const port=4000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message:"This is server1 "
    })
})

app.use('/api/v1',order);


app.listen(port,()=>{
    console.log(`server1 is running at port ${port}`)
})