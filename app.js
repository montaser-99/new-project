
// import http from "http"



// const server = http.createServer(
//     (req, res) => {
//         res.setHeader("Content-Type", "application/json")
//         if (req.url === "/users" && req.method === "GET") {
//             res.statusCode = 200
//             res.end(JSON.stringify(users))
//         }  
//          if (req.url === "/add" && req.method === "POST") {
//             const body=JSON.parse(req.body)
//             users.push(body)
//             res.statusCode = 200
//             res.end(JSON.stringify(users))
//         } 
//         else {
//             res.statusCode = 404
//             res.end(JSON.stringify({ message: "this route not exist " }))
//         }
//     }
// )    


// server.listen(3000, () => { console.log("server is runing ") })

import express from "express"
import userRouter from "./routes/user.rotes.js"
import dotenv from "dotenv"
import connect from "./config/connection.js"
dotenv.config()
const app = express()


app.use(express.json())


// app.use("/users", userRouter)

// app.get("/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find((user) => { return user.id == id })
//     if (!user) {
//         res.status(404).json({ message: "user not found" })
//     }

//     res.status(200).json({ user })

// })

app.use("/users",userRouter)

const startServer = async () => {
    try {
        await connect()
        app.listen(3000, () => { console.log("server is runing ") })
    } catch (error) {
        console.log("faild to start server")
    }
}
   startServer()