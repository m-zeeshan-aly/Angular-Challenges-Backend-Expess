import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "../routes/userRouter.js";
import cors from "cors"; // Use import instead of require



const app =express();

app.use(bodyParser.json());

app.use(cors());

dotenv.config();



const PORT = process.env.PORT || 3000;

const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("DB Connected Successfully")
    app.listen(PORT,()=>{
    console.log(`Running On Port ${PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})


app.use("/api", router);


// const mockUsers=[
//         {id:1 ,username:"Ali",profession:"Software developer"},
//         {id:1 ,username:"Ali",profession:"Software developer"},
//         {id:1 ,username:"Ali",profession:"Software developer"}
//     ]


// app.get("/",(request,response)=>{
//     response.status(201).send({msg:"Hello World"});
// })
// app.get("/api/users", (request,response)  => {
//     response.send(mockUsers);
// })

// app.get("/api/users/:id", (request,response)  => {
//     console.log(request.params);
//     const parsedId = parseInt(request.params.id)
//     if (isNaN(parsedId)) 
//         return response.status(400).send({msg: "Bad Request. invalid ID."});
//     const findUser = mockUsers.find((user)=> user.id ===parsedId);
    
//     if (!findUser) return  response.sendStatus(404);
//     return response.send(findUser)
   
// })




// mongodb+srv://mzeeshanali0346:100angularchallenges@cluster0.b8b5c.mongodb.net/