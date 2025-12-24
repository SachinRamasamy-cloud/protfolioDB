// import express from "express";
// import dotenv from "dotenv"
// import connectDB from "./db.js";
// import cors from "cors"
// import projectRoutes from "./routes/projectRoutes.js";


// dotenv.config()
// connectDB()

// const app = express()
// app.use(cors(
//     {
//         orgin:"http://localhost:5173",
//         methods:["GET","POST","PUT","DELETE"]
//     }
// ))


// app.use(express.json())

// app.use("/projects", projectRoutes)

// const PORT = 5000
// app.listen(PORT, () =>
//     console.log(`Port is running on the PORT: ${PORT}`)
// )

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import path from "path";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://sachinramasamy-cloud.github.io"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/projects", projectRoutes);

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Port is running on the PORT: ${PORT}`)
);
