import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); //does nothing at this moment
app.use(express.json()); //parses jsons
app.use(express.urlencoded({extended: false}));
// this threee lines is used in all projects

//routs:

app.listen(8080,function(){
 console.log("listening on" + 8080);
});
