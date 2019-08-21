'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const listController = require("./controllers/ListController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/lists")
  .get(listController.listAll)
  .post(listController.createNewItem);

app
  .route("/lists/:itemId")
  .get(listController.readItem)
  .put(listController.updateItem)
  .delete(listController.deleteItem);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
