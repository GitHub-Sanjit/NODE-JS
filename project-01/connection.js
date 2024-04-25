const mongoose = require("mongoose");

async function connectionMongoDb(url) {
  return mongoose
    .connect(
      url
    )
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log("MongoError", err));
}

module.export = {
  connectionMongoDb,
};
