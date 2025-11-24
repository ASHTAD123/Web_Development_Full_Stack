import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/database.js";

dotenv.config({
    path:"./.env",
});

const port = process.env.PORT || 3000;

connectDB()
    .then(
        app.listen(port,()=>{
            console.log(`Application is listening on port : ${port}`);
        }))
    .catch(err =>{
        console.error("Mongo DB Connection Error",err);
        process.exit(1);
    })