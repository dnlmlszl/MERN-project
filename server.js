import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
// import cors from "cors"
// db and authenticate User
import connectDB from "./db/connect.js";
// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
// Middlewares
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js"
// dirname, file url, path
import { dirname } from "path"
import { fileURLToPath } from "url"
import path from "path"
// security packages
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

// app.use(cors())
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"))
}

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome!" });
// });

// app.get("/api/v1", (req, res) => {
//   res.json({ msg: "API" });
// });

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, "./client/build")))
app.use(express.json());
app.use(cookieParser())

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
