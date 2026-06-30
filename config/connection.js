import mongoose from "mongoose";

const connect=async()=>{
    try {
        const url =process.env.DB_URL
       await  mongoose.connect(url)
       console.log("connected to database")
    } catch (error) {
        throw new error("error to connect database ")
    }
}

export default connect
