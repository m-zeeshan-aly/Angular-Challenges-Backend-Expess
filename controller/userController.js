
import User from "../model/userModel.js";

export const create = async(req,res) =>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;
        const userExist = await User.findOne({email});
        if (userExist){
            return res.status(400).json({
                message:"User already exist"
            })
        }
        const saveData = await newUser.save();
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: saveData
        })
        
    }catch(error){
        res.status(500).json({errorMessage : error.message})
    }
}

export const getAllUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        })
    }catch(error){
        res.status(500).json({errorMessage : error.message})
    }
}

export const getUserById = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist){
            return res.status(404).json({message: "User Not Found"});
        }
        res.status(200).json(userExist)

    } catch(error){
        res.status(500).json({errorMessage: error.message})
    }
}
