import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User";

const app = express();

app.use(cors()); //does nothing at this moment
app.use(express.json()); //parses jsons
app.use(express.urlencoded({extended: false}));
// this threee lines is used in all projects

//routs:
//app.post('/addUser', async(req, res)=>{
  //  const {user} = req.body;
    //const newUser = await User.create(user);
    //res.send(newUser);
//})


mongoose.connect("mongodb+srv://roiemw:devdev@cluster0.3igmy94.mongodb.net/AmazonLookalike?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
app.listen(8080,function(){
 console.log("listening on" + 8080);
});
}).catch(err=> {console.log(err.massage);});


