import { Router } from "express";
import { addUser, getUsers } from "../controller/user.controller.js";
const userRouter=Router()

userRouter.get("/",getUsers)
userRouter.post("/add",addUser)

export default userRouter