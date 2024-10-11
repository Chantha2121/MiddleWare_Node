import express from 'express';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use('/user', userRoute);// login and register user
app.use('/user', userRoute);
// Listen server
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
})
