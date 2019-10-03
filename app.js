var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/student/info",function(req,res){
    res.json({
        message:"success",
        data:{"info":"Her English and Chinese is very good."}
    })
})
app.listen(3000,()=>{
    console.log("Server started responding on port 3000.");
})