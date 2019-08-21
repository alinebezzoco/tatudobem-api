'use strict';

module.exports = (app) => { 
  const listController = require("../controllers/ListController");

app
  .route("/lists")
  .get(listController.getAll)
  .post(listController.createNewItem);

app
  .route("/lists/:itemId")
  .get(listController.getItem)
  .put(listController.updateItem)
  .delete(listController.deleteItem);

}
