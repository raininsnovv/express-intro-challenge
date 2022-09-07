const express = require("express");
const app = express();
const port = 3000;

// Создаём эндпоинт GET /, т.е. определяем как наш сервер будет отвечать
// на запрос GET localhost:3000/
app.get("/", (req, res) => {
  // Отправляем клиенту текст
  res.send("HOLA HOLA");
});

app.get("/users/:id", (req, res) => {
  res.json(`Клиент запрашивает юзера с номером ${req.params.id}`);
});
// app.get("/users", (req, res) => {
//   res.json(["user1", "user2", "user3"]);
// });
// app.get("/users:id", (req, res) => {
//   res.json("user добавлен");
// });
// app.post("/admin", (req, res) => {
//   res.json("Не хватает прав доступа");
// });

// "Запускаем" сервер на 3000 порте.
app.listen(port, () => {
  // Данная колбек-функция выполняется когда сервер будет запущен,
  // поэтому в ней мы сообщаем, что сервер запущен
  console.log(`Example app listening at http://localhost:${port}`);
});
