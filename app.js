var express = require('express');
var app = express()
app.get('/',function(req,res,next){
    res.send('hello world!!');
})
app.post('/login',(req,res,next)=>{

})
app.post('/getUser',(req,res,next)=>{
    
})
app.listen(3000,(error)=>{
    console.log("listening on 3000")
});