import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//this is the initial of every express app
const app = express();

//we use body parser for post req, so we will send some img using post, thats why the size here is 30 mb.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//This link is coming from mongoDb atlas after setting up the cluster.
const CONNECTION_URL =
  "mongodb+srv://sanjeebMemories:sanjeebMemories123@cluster0.qpbyxsw.mongodb.net/?retryWrites=true&w=majority";

//This defines on which port our server should run, if there is no port define in env then run it in 5000
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((err) => console.log(err.message));

// mongoose.set("useFindAndModify", false);
