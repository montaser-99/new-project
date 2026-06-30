import {User} from "../models/use.model.js"



export const getUsers=(req,res)=>{res.status(200).json(users)}


export const addUser=async(req, res) => {
    const data = req.body
   const newuser= await User.create(data)
    res.status(200).json({ message: "new user" })
}