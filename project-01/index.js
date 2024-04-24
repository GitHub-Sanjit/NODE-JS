const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// MiddleWare
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
  req.myUserName = "Sanjit Sarkar";
});

//Routes
app.get("/users", (req, res) => {
  const html = `
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    `;
  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  res.setHeader("myName", "Sanjit Sarkrar");
  console.log(req.headers);
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);

    // TODO: Edit the user with id
    return res.json({ status: "Pending." });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    // TODO: Delete the user with id
    return res.json({ status: "Pending." });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success.", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
