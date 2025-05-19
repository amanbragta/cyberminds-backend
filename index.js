import express from "express";
import postingRoute from "./routes/posting.route.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
mongoose
  .connect(
    `mongodb+srv://amanbragta:${process.env.MONGO_SECRET}@cluster0.ijxbuwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/jobs`
  )
  .then(() => console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.set("trust proxy", 1);
app.use(cors(process.env.CLIENT_URL));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use("/jobs", postingRoute);
app.get("/", (req, res) => {
  res.send("hello vercel!");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server running on port: ${PORT}`));
