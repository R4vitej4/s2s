const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app= express();
const port=4001;

app.use(cors());

app.get('/',(req,res)=>{
    res.json({
        message:"server 2 is here"
    })
})


app.get('/paydart',async(req,res)=>{
   try{
    const server1_url="http://localhost:4000/api/v1/create";
    const response = await axios(server1_url);
    console.log(response.data.server1['payment_link']);
    res.json({
        data:response.data.server1['payment_link']
    })
   }
   catch(e){
    console.log(e)
   }
})


app.listen(port,()=>{
    console.log(`server2 is running at port ${port}`)
})