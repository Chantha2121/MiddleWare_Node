import express, { Router } from 'express';
const port = 3005;
const app = express();
const route = express.Router();

const middleware = (req, res, next)=> {
    console.log(`${req.url}`)
    next();
}

route.use(middleware);

route.get('/user',(req,res)=>{
    res.send(`List of the Users`);
})

app.use('/api',route);

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})