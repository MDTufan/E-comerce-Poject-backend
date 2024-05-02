const express=require("express");
const morgan = require('morgan')
const app=express();


// MidilWer

app.use(morgan("dev"));






const islogin=(req,res,next)=>{
    const login=false;
    if(login){
        next()
    }else{
        return res.status(401).json({
            message:"server is not Working"
        })
    }
}



app.get("/", islogin,(req,res)=>{
    res.send("This Is Home Page")
});
app.post("/test",(req,res)=>{
    res.status(201).json({
        message:"this is test working fine"
    })
});


app.use((req,res,next)=>{
    res.status(500).json({
        Message:"Route is not found"
    })
    next();

});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(3001,()=>{
    console.log(`server is Runing http://localhost:3001`);
})