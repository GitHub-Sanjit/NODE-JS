const express = require("express");
const { connectionMongoDb } = require("./connection");

const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

//connection
connectionMongoDb(
  "mongodb+srv://node1:node1@cluster0.wz775d8.mongodb.net/youtube-app-1?retryWrites=true&w=majority&appName=Cluster0"
);

// MiddleWare
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//Routes
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
