import express from "express"
import cors from "cors";

const app = express();

//Basic config
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",")  || "http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
    allowedHeaders:["Authorization","Content-Type"]
  }),
);

// import routes

import  healthCheckRouter from "./routes/healthCheck.route.js";

app.use("/api/v1/healthCheck", healthCheckRouter);



app.get("/", (request, response) => {
  response.send("Home");
});

app.get("/insta", (request, response) => {
  response.send("Insta Page");
});
export default app;
