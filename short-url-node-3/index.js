const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./model/url");

const app = express();
const PORT = 8001;

app.use(express.json());

connectToMongoDB(
  "mongodb+srv://node1:node1@cluster0.wz775d8.mongodb.net/short-url2?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("MongoDb Connected"));

app.use("/url", urlRoute);

app.get("/shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
