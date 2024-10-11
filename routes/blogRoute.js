import express, { urlencoded } from 'express';
import {data} from './data.js'
const blogRoute = express.Router();

blogRoute.use(express.json());
blogRoute.use(urlencoded({extended: true}))

// Get Blog all
blogRoute.get('/getBlogs',(req,res)=>{
    if(!data){
        return res.status(404).json({
            message: "Data not found"
        })
    }
    return res.status(200).json({
        message: "Data is valid",
        data: data
    })
})

// Get Blog by ID
blogRoute.get('/getBlogByID/:id',(req,res)=>{
    const {id} = req.params;
    const found = data.find(blog =>{
        return blog.id == id;
    })
    if(!found){
        return res.status(404).json({
            message : "Id is not found"
        })
    }else{
        return res.status(200).json({
            message : "ID id found",
            data: found
        })
    }
    
})

// Create the new blog 
blogRoute.post('/createBlog',(req,res)=>{
    const {id, title , description, status} = req.body;
    if(!id && !title && !description && !status){
        res.json({
            message: 'Data is invalid'
        })
    }
    const inserted = data.push({
        id: id,
        title: title,
        description: description,
        status: status
    })
    res.status(200).json({
        data: data
    })
})

// Edit the Blog
blogRoute.put('/editBlog/:id',(req,res)=>{
    const {id} = req.params;
    const {title, description, status} = req.body;
    const foundIndex = data.findIndex(blog =>{
        return blog.id == id;
    })
    console.log(foundIndex)
    if(foundIndex != -1){
        data[foundIndex] = {
            id: id,
            title: title,
            description: description,
            status: status
        }
    }
    res.status(200).json({
        data:data
    })
})

// Remove the blog in data
blogRoute.delete('/deleteById/:id',(req, res)=>{
    const {id } = req.params;
    const foundIndex = data.findIndex(blog => {
        return blog.id == id;
    })

    if(foundIndex !== -1){
        data.splice(foundIndex, 1);
        return res.status(200).json({
            message: "Blog is deleted successfully",
            data: data
        })
    }else{
        return res.status(404).json({
            message : "ID is not found"
        })
    }
})


export default blogRoute;