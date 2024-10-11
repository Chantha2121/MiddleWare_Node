import express from 'express';
const port = 3004;

const app = express();

// Use the app.use
app.use(logger);

app.get('/',(req,res)=>{
    console.log("Home page");
    res.send("Welcome to home page!");
})

app.get('/Login',auth,(req,res)=>{
    console.log("Login page");
    res.send("User is login!");
})

// Function middleware
function logger(req, res, next) {
    console.log("Log");
    next();
}

function auth(req, res, next) {
    if(req.query.admin === 'true'){
        next();
    }
    else{
        res.send("No Auth!");
    }
    console.log("Log");
}

app.listen(port, ()=>{
    console.log(`Server listening on the http://localhost:${port}`);
})