import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import geminiResponse from "./gemini.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // change this later to your frontend domain on deploy
    credentials: true
}));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// 🟢 Root route added
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(port, () => {
    connectDb();
    console.log("server started");
});
