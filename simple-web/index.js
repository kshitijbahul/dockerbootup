const express= require ('express');

var app=express();

app.get('/',(req,res)=>{
    res.send('What is The Hi and Bye about');
})

app.listen(8080,()=>{
    console.log("Listing on port 8080")
})