import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.route.js";
import transactionsRoute from "./routes/transactions.route.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://mazebank.netlify.app",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/transactions", transactionsRoute);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});

app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
