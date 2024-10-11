import express from 'express';
const userRoute = express.Router();

userRoute.use(express.json());
userRoute.use(express.urlencoded({extended:true}));

userRoute.post('/login',(req,res)=>{
    const {email, password} = req.body;
    if(!email && !password){
        return res.status(400).json({
            message: 'Invalid email or password'   
        })
    }
    return res.status(200).json({
        message: 'Login successfully',
        email: email,
        password: password
    })
});

// Route Rigister 
userRoute.post('/register',(req,res) => {
    const {id, username, email, password} = req.body;
    if(!id && !username){
        return res.status(400).json({
            message: "invalid username and id "
        })
    }
    return res.status(200).json({
        message: "Register successfully",
        id: id,
        username: username,
        email: email,
        password: password
    })
})


export default userRoute;