
const express = require("express");
const bodyParser = require("body-parser");
const listController = require("./api/controllers/ListController");

// database instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoints
app
  .route("/lists")
  .get(listController.listAll)
  .post(listController.createNewItem);

app
  .route("/lists/:itemId")
  .get(listController.getItem)
  .put(listController.updateItem)
  .delete(listController.deleteItem);

app.listen(port, () => {
  console.log(
      `
                                                                  
      888                 888                  888              888                                                   d8b 
      888                 888                  888              888                                                   Y8P 
      888                 888                  888              888                                                       
      888888  8888b.      888888 888  888  .d88888  .d88b.      88888b.   .d88b.  88888b.d88b.       8888b.  88888b.  888 
      888        "88b     888    888  888 d88" 888 d88""88b     888 "88b d8P  Y8b 888 "888 "88b         "88b 888 "88b 888 
      888    .d888888     888    888  888 888  888 888  888     888  888 88888888 888  888  888     .d888888 888  888 888 
      Y88b.  888  888     Y88b.  Y88b 888 Y88b 888 Y88..88P     888 d88P Y8b.     888  888  888     888  888 888 d88P 888 
      "Y888 "Y888888      "Y888  "Y88888  "Y88888   "Y88P"      88888P"   "Y8888  888  888  888     "Y888888 88888P"  888 
                                                                                                             888          
                                                                                                             888          
                                                                                                             888                                                                                                                                                                                                                                      
        2019 - Aline Bezzoco 
        Feito com amor e Node JS ❤
        Server running at http://localhost:${port}                                                                                                                               
      `,
    );
});
