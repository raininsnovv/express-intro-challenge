const express = require("express");
const app = express();
const port = 3500;

app.get("/", (req, res) => {
  res.send("Hola Hola");
});
app.get("/users", (req, res) => {
  res.send(["user1", "user2", "user3"]);
});
app.post("/users", (req, res) => {
  res.send("user added");
});

app.delete("/users/:id", (req, res) => {
  res.send("user with ID:id deleted");
});

app.patch("/users/:id", (req, res) => {
  res.send("user with ID:id changed");
});

app.get("/admin", (req, res) => {
  res.send("Не хватает прав доступа!!!");
});
app.listen(port, () => {
  console.log("Новый сервак на порте 3500!");
});
