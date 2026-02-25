import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDb from "./config/db.js";
import todoRoutes from "./routes/todo.route.js"
import errorHandler from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/todos",todoRoutes)

app.use(errorHandler);

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