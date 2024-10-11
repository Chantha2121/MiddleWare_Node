import express from 'express';
const port = 3009;

const app = express();
// variables middleware
const middleware = (req, res, next)=>{
    console.log(`Middleware is working`);
    next();
}
// Application level middleware
app.use(middleware)

// Route / in page 
app.get('/', (req, res) =>{
    res.send(`Welcome to home page`);
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})