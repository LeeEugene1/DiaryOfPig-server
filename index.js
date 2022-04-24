const express = require("express");
const { user, pay, directory, account, diary } = require("./router");
const app = express();
// const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use(
  session({
    secret: process.env.SECRETCODE,
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);
app.get("/", (req, res) => {
  res.send(req.session);
});

app.use(user);
app.use(pay);
app.use(directory);
app.use(account);
app.use(diary);

// app.use(diary);

const PORT = 5000;
app.listen(PORT, "localhost", () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});
