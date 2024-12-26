import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    dob:{
        type: String,
        
    },
    gender:{
        type: String,
        
    },
    address:{
        type: String,
        
    },
    country:{
        type: String,
        
    },
    city:{
        type: String,
    },
    postalCode:{
        type: String,
        
    },
    region:{
        type: String,
        
    }
})

export default mongoose.model("Users",userSchema)


