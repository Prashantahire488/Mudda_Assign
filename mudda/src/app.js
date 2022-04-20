const express = require("express");

const app = express();

app.use(express.json());

const translateController = require("./controller/translate.controller");

app.use("/translateinfo", translateController);

const connect = require("./config/db");


const port = 4001
app.listen(port, async () => {
  await connect();

  console.log(`server is running ${port}`);
});