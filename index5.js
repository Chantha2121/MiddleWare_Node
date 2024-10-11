import express from 'express';
import dotenv from 'dotenv';
import blogRoute from './routes/blogRoute.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define middleware before using it
const middleware = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);

    const { id, title, description, status } = req.body;

    if ((req.method === 'PUT' || req.method === 'POST') && (!id || !title || !description || !status)) {
        return res.status(400).json({ message: 'Invalid data' });
    } else {
        next();
    }
};

// Use the middleware
app.use(middleware);

// Route handling
app.use('/blog', blogRoute);

// Listen to server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
