const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Routes
app.get("/users", (req, res) => {
  const html = `
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    `;
  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
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
  // TODO: Create new user
  return res.json({ status: "Pending." });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
