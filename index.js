const express = require("express");
const { user, directory, diary } = require("./router");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(user);
// app.use(directory);
// app.use(diary);

const PORT = 5000;
app.listen(PORT, "localhost", () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});
