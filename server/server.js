import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

const PORT=4000

const app=express();
app.use(cors);
mongoose.set('strictQuery', true);
await mongoose.connect("mongodb+srv://MERN-project:MERN-project123@atlascluster.lqpgyzl.mongodb.net/?retryWrites=true&w=majority")
console.log("Mongodb connection is successful")


app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=>{
    console.log("Server is running at https://localhost:4000");
})