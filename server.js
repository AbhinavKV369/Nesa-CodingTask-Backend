import dotenv from "dotenv";
import express, { urlencoded } from "express";

import connectDb from "./config/db.js";
import errorHandler from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json({urlencoded:true}));

app.use(errorHandler());

const startServer = async()=>{
    try {
      await connectDb();
      app.listen(PORT,()=>{
        console.log("Server Connected at PORT ",PORT);
      })  
    } catch (error) {
         console.error("Failed to start server:", error.message);
    }
}
startServer();