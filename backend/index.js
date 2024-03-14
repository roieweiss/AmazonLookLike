import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors()); //does nothing at this moment
app.use(express.json()); //parses jsons
app.use(express.urlencoded({extended: false}));
// this threee lines is used in all projects
const PORT = process.env.PORT || 8080;
//routs:
//app.post('/addUser', async(req, res)=>{
  //const {user} = req.body;
  //const newUser = await User.create(user);
  //res.send(newUser);
//})


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{
app.listen(process.env.PORT,function(){
 console.log("listening on" + process.env.PORT);
});
}).catch(err=> {console.log(err.massage);});


