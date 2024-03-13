import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true}, //with the unique you can only register once
    password :{type: String, required: true}
},{
    timestamps: true // make me see when thw account was made (time)
})

const User = mongoose.model("User",userSchema); // we will use you to do action like add delete

export default User;