const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/public/homepage/userHome.html');
    
})


app.listen('5000',()=>{
    console.log("connection succesfull");
})